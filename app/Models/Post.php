<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [ "body" , "user_id" ] ;
    ######################## Relations ################################
    public function user(){
        return  $this -> belongsTo("App\User") ;  
    }
}
