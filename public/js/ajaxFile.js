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
          success: function ( response ) {
               // alert( response );
               if( response.status == "error" && response.msg == "validation error" ){
                    $.each( response.errors , function( key , val ){
                         $("small.text-danger." + key ).text(val[0]);
                    });
               }else if( response.status == "error" && response.msg == "insert opration failed" ){
                    alert("insert opration failed");
                    window.location = 'posts' ;
               }else if( response.status == "success" ){

                    $(".card-body .create-post textarea").val('');

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
                                                            <a href=""><b> ` + response.data.user_info.name + ` </b></a>
                                                       </div>
                                                       <h6 class="text-muted time"> 1 second ago  </h6>
                                                  </div>
                                             </div> 
                                             <div class="post-description"> 
                                                  <p> ` + response.data.post_data.body + ` </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>` ;
                    postsContainer.append(newPostHtml);


               }
          },
          error: function(feedback){
             alert("Error");   // failed to connect with url ( Controller )
          }
     });  
 });