@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">

        <!--------- Create Post ---------->
        <create-post></create-post>

        <!--------- Show Posts ---------->
        <show-posts></show-posts>


    </div>
</div>
@endsection
