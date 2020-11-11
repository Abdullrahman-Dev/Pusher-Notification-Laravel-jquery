<template>
     <div class="col-md-8">
          <div class="card">
               <div class="card-header"> Create Post </div>
               <div class="card-body">
                    <form class="create-post">
                         <textarea name="body" id="body"  rows="5" class="form-control" placeholder="Type Post Body..." v-model="post.body"></textarea>
                         <small class="form-text text-danger body pl-1"  v-if="errors.body" > {{errors.body[0] }} </small> 
                         <br>
                         <button @click.prevent="submitForm" class="btn btn-success float-right create-post-btn"> Submit </button>
                    </form> 
               </div>
          </div>
     </div>
</template>
<script>
     export default {
          data(){
               return{
                    post:{
                         csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                         body: ''
                    },
                    errors: {},
               }
          },
          methods:{
               getPosts(){
                    axios.get('/api/posts/get_posts')  
                    .then( 
                         response => {  
                              // console.log(response.data);
                              this.posts = response.data.data 
                         }
                    )
                    .catch( error => console.log(error) )
               },
               submitForm(){
                    axios.post("/api/posts/store" , this.post)
                    .then( 
                         response => {  // if there success request 
                              console.log(response)
                              if( response.data.status == "error" && response.data.msg == "validation error" ){
                                   this.errors = response.data.errors  // equale it with var errors in data
                              }else if( response.data.status == "error" && response.data.msg == "insert opration failed" ){
                                   alert("insert opration failed");
                                   window.location = 'posts' ;
                              }else if( response.data.status == "success" ){
                                   this.post.body = '';
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
                                                                           <a href=""><b> ` + response.data.data.user_info.name + ` </b></a>
                                                                      </div>
                                                                      <h6 class="text-muted time"> 1 second ago  </h6>
                                                                 </div>
                                                            </div> 
                                                            <div class="post-description"> 
                                                                 <p> ` + response.data.data.post_data.body + ` </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>` ;
                                   postsContainer.append(newPostHtml);
                              }
                         }
                    )
                    .catch( error => console.log(error) ); 
               }
          }
     }
</script>