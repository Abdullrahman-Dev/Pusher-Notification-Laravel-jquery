<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateForgienkKeyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        ##################  posts table ##################
        Schema::table('posts', function (Blueprint $table) {
            /* =========== user_id ===============*/
            $table->foreign("user_id")
            ->references('id')
            ->on("users")
            ->onDelete("cascade")       
            ->onUpdate("cascade");  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forgienk_key');
    }
}
