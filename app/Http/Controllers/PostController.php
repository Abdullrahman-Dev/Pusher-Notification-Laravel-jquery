<?php

namespace App\Http\Controllers;

use App\Events\NewNotification;
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
               
            Post::create([  
                'body'    => $request->body , 
                'user_id' => Auth::user()->id ,   
            ]);

            return response() -> json([
                "status" => "success",
                "msg"    => "messege sent successfully",
            ]);

        }
    }

}
