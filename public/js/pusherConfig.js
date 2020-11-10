



// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('3f9a0b89de189c92500c', {
     cluster: 'mt1'
});

var channel = pusher.subscribe('new-notification');
// channel.bind('App\\Events\\NewNotification', function(data) {
channel.bind('NewNotification', function(data) {

     // set some navbar vars 
     var notificationsWrapper   = $('li.dropdown.dropdown-notifications');  // navbar li 
     var notificationsToggle    = notificationsWrapper.find('a[data-toggle]');  // find <a data-toggle=""></a>
     var notificationsCountElem = notificationsToggle.find('span.badge.badge-pill');
     var notificationsCount     = parseInt( notificationsCountElem.text() );
     var notifications          = notificationsWrapper.find('div.notifications-container');

     var existingNotifications = notifications.html();
     var newNotificationHtml = 
     `<a class="dropdown-item notifications-item" href="">
          <img src="http://bootdey.com/img/Content/user_1.jpg" alt="img">
          <div class="text">
               <h4>` + data.user_name + `</h4>
               <p> ` + data.user_name + ` create new post </p>
          </div>
     </a>` ;
     notifications.html(newNotificationHtml + existingNotifications);
     notificationsCount += 1;
     notificationsCountElem.text(notificationsCount);
     notificationsWrapper.show();

});