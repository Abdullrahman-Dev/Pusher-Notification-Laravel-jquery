<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        "body"    => $faker->sentence(10), 
        "user_id" => rand(1,2),  // IDs of Users
    ];
});
