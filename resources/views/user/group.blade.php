@extends('layout')
@section('content')
    <div class="group_top"></div>
    <div class="group_search_wrap">
        <div class="search_group">
            <form action="" method="post">
                <input type="search" name="search" class="search_ran">
                <input type="submit" name="submit" class="search_button" value="検索">
            </form>
        </div>
        <div class="group_link_button">
            <a href="{{ route('GroupCreate') }}" class="group_link">グループ作成</a>
            <a href="{{ route('InGroup') }}" class="group_link">グループ参加</a>
        </div>
    </div>
    <div class="item_wrapper">
        <a href="{{ route('CreatedGroup') }}" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
        <a href="" class="item_link">
            <img src="{{ asset('images/teruteru_cllurer.jpg') }}" alt="" class="item_image">
            <p>グループ名</p>
            <p>(人数)</p>
        </a>
    </div>
@endsection
