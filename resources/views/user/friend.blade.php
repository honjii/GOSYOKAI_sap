@extends('layout')
@section('content')
    <div class="group_top"></div>
    <div class="group_search_wrap">
        <div class="search_group">
            <form action="{{ route('Friendsearch') }}" method="post">
                @csrf
                <input type="search" name="search" class="search_ran">
                <input type="submit" name="submit" class="search_button2" value="検索">
            </form>
        </div>
    </div>
    <div class="item_wrapper">
        <a href="" class="item_link">
            <img src="{{$auth -> image}}" alt="" class="item_image">
            <p>{{$auth -> name}}</p>
        </a>
        @foreach($users as $user)
        <a href="" class="item_link">
            <img src="{{  $user -> image }}" alt="" class="item_image">
            <p>{{ $user -> name }}</p>
        </a>
        @endforeach
    </div>
@endsection
