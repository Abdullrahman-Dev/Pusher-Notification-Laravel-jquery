<template>
     <div class="col-md-8">
          <div class="card">
               <div class="card-header"> Create Post </div>
               <div class="card-body">
                    <form class="create-post">
                         @csrf
                         <textarea name="body" id="body"  rows="5" class="form-control" placeholder="Type Post Body..."></textarea>
                         <small class="form-text text-danger body pl-1">  </small> 
                         <br>
                         <button type="submit" class="btn btn-success float-right create-post-btn"> Submit </button>
                    </form> 
               </div>
          </div>
     </div>
</template>
<script>
     export default {
          
     }
</script>