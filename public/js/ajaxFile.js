$(".create-post-btn").on( "click",function (e){
     e.preventDefault();
     var formData = new FormData( $(".create-post")[0] );
     $("small.text-danger").text(""); // empty small html 
     $.ajax({
          type: "POST",
          url: 'posts/store',
          data: formData  ,
          processData: false,
          contentType : false , 
          cache    : false,
          success: function ( data ) {
               // alert( data );
               if( data.status == "error" && data.msg == "validation error" ){
                    $.each( data.errors , function( key , val ){
                         $("small.text-danger." + key ).text(val[0]);
                    });
               }else if( data.status == "error" && data.msg == "insert opration failed" ){
                    alert("insert opration failed");
                    window.location = 'posts' ;
               }else if( data.status == "success" ){
                    window.location = 'posts' ;
               }
          },
          error: function(feedback){
             alert("Error");   // failed to connect with url ( Controller )
          }
     });  
 });