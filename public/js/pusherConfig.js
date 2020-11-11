



// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('3f9a0b89de189c92500c', {
     cluster: 'mt1'
});

var channel = pusher.subscribe('new-post');
// channel.bind('App\\Events\\NewPost', function(data) {
channel.bind('NewPost', function(data) {


     /*=========== Add Notifications ==============*/
     var notificationsCountElem = $('.dropdown-notifications span.badge.badge-pill'); 
     var notificationsCount     = parseInt( $('.dropdown-notifications span.badge.badge-pill').text() );
     var notifications          = $('.dropdown-menu.dropdown-menu-right.notifications-container');
     var newNotificationHtml = 
     `<a class="dropdown-item notifications-item" href="">
          <img src="http://bootdey.com/img/Content/user_1.jpg" alt="img">
          <div class="text">
               <h4>` + data.user_name + `</h4>
               <p> ` + data.user_name + ` create new post </p>
          </div>
     </a>` ;
     notifications.append( newNotificationHtml );
     notificationsCount += 1;
     notificationsCountElem.text(notificationsCount);

});

