<template>
     <div class="col-md-8">
          <div class="card card-container">
               <div class="card-header"> Posts </div>
               <div class="card-body">
                    <div class="container" v-for=" post in posts " :key="post.id" >
                         <div class="row">
                              <div class="col-12">
                                   <div class="card card-white post">
                                   <div class="post-heading">
                                        <div class="float-left image">
                                             <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
                                        </div>
                                        <div class="float-left meta">
                                             <div class="title h5">
                                                  <a href=""><b> {{ post.user.name  }} </b></a>
                                             </div>
                                             <h6 class="text-muted time"> {{ post.added_at  }} </h6>
                                        </div>
                                   </div> 
                                   <div class="post-description"> 
                                        <p>{{ post.body  }}</p>
                                   </div>
                                   </div>
                              </div>
                              
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
     export default {
          data(){
               return{
                    posts: {}
               }
          },
          mounted(){
            this.getPosts();
          },
          methods:{
               getPosts(){
                    axios.get('/api/posts/get_posts')  
                    .then( 
                         response => {  
                              console.log(response.data);
                              this.posts = response.data.data 
                         }
                    )
                    .catch( error => console.log(error) )
               }
          }
     }
</script>