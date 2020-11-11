



// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('3f9a0b89de189c92500c', {
     cluster: 'mt1'
});

var channel = pusher.subscribe('new-post');
// channel.bind('App\\Events\\NewPost', function(data) {
channel.bind('NewPost', function(data) {

     if( user_id != data.user_info.id ){  // don't show notification for me

          /*=========== Add Notifications ==============*/
          var notificationsCountElem = $('.dropdown-notifications span.badge.badge-pill'); 
          var notificationsCount     = parseInt( $('.dropdown-notifications span.badge.badge-pill').text() );
          var notifications          = $('.dropdown-menu.dropdown-menu-right.notifications-container');
          var newNotificationHtml = 
          `<a class="dropdown-item notifications-item" href="">
               <img src="http://bootdey.com/img/Content/user_1.jpg" alt="img">
               <div class="text">
                    <h4>` + data.user_info.name + `</h4>
                    <p> ` + data.user_info.name + ` create new post </p>
               </div>
          </a>` ;
          notifications.append( newNotificationHtml );
          notificationsCount += 1;
          notificationsCountElem.text(notificationsCount);

          /*============== Add Post ==============*/
          var postsContainer   = $('.col-md-8 div.card-container .card-body');
          var newPostHtml = 
               `<div class="container">
                    <div class="row">
                         <div class="col-12">
                              <div class="card card-white post">
                                   <div class="post-heading">
                                        <div class="float-left image">
                                             <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
                                        </div>
                                        <div class="float-left meta">
                                             <div class="title h5">
                                                  <a href=""><b> ` + data.user_info.name + ` </b></a>
                                             </div>
                                             <h6 class="text-muted time"> 1 second ago </h6>
                                        </div>
                                   </div> 
                                   <div class="post-description"> 
                                        <p> ` + data.post_data.body + ` </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>` ;
          postsContainer.append(newPostHtml);


     }
});

