<?php

namespace App\Http\Controllers;

use App\Events\NewPost;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $posts = Post::with('user')->get();
        foreach( $posts as $post ){
            $post -> setAttribute("added_at" , $post -> created_at -> diffForHumans() ); 
        } 
        return view( 'posts' , compact("posts") );
    }
    
    public function store(Request $request)
    {
        $rules = [
            "body"     => " required | min:28 | max:500 " ,
        ];
        $validator = Validator::make(  $request->all() , $rules  ); 

        if( $validator -> fails()) { 
            
            return response() -> json([
                "status" => "error",
                "msg"    => "validation error",
                "errors" => $validator->errors()  // return errors validator in array 
            ]);
            
        }else{
               
            try{

                Post::create([  
                    'body'    => $request->body , 
                    'user_id' => Auth::user()->id ,   
                ]);

                // set $data var to save post info in it
                $data = [
                    "post_body" => $request->body  ,
                    'user_id'   => Auth::user()->id ,   
                    'user_name' => Auth::user()->name ,   
                ];

                // send $data in __construct() event NewNotification 
                event( new NewPost($data) ); 

                
                return response() -> json([
                    "status" => "success",
                    "msg"    => "messege sent successfully",
                ]);
                
            }catch( Exception $e ){

                return response() -> json([
                    "status" => "error",
                    "msg"    => "insert opration failed",
                ]);

            }

        }
    }

}
