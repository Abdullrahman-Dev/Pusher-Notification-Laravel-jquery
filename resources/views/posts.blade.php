@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <!--------- Create Post ---------->
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
        <!--------- Show Posts ---------->
        <div class="col-md-8">
            <div class="card card-container">
                <div class="card-header"> Posts </div>
                <div class="card-body">
                    @foreach ($posts as $post)
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card card-white post">
                                        <div class="post-heading">
                                            <div class="float-left image">
                                                <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
                                            </div>
                                            <div class="float-left meta">
                                                <div class="title h5">
                                                    <a href=""><b> {{ $post ->user ->name  }} </b></a>
                                                </div>
                                                <h6 class="text-muted time"> {{ $post ->added_at  }} </h6>
                                            </div>
                                        </div> 
                                        <div class="post-description"> 
                                            <p>{{ $post ->body }}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
