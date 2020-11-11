<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewPost implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
    */


    // set public var 
    public $post_body;
    public $user_Info;

    public function __construct($data)   // get data from store func in postController
    {
        $this->post_body   = $data["post_body"] ;  
        $this->user_Info   = $data["user_Info"] ;       
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new channel('new-post');  // channel name to connect it with pusher
        // return ['new-post'];       
    }

    public function broadcastAs()
    {
        return 'NewPost';  // event name to connect it with pusher
    }
}
