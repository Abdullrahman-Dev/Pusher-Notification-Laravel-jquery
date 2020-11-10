



// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('3f9a0b89de189c92500c', {
     cluster: 'mt1'
});

var channel = pusher.subscribe('new-notification');
// channel.bind('App\\Events\\NewNotification', function(data) {
channel.bind('NewNotification', function(data) {
     console.log(data);
});