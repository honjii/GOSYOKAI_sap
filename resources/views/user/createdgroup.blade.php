@extends('layout')
@section('content')
    <div class="group_top"></div>
    <h1 class="group_h1">グループ<span class="group_people">(人数{{$users->count()+1}}人)</span></h1>
    <div class="group_search_wrap">
        <div class="search_group">
            <form action="{{ route('Search') }}" method="post">
                @csrf
                <!--プルダウンカテゴリ選択-->
                <div class="selectwrap">
                    <select name="sources"id="sources"class="select" placeholder="Source Type">
                    <option class="kategori" value="">カテゴリ</option>
                    <option value="area" name="area" id="area">出身地</option>
                    <option value="hobby" name="hobby">趣味</option>
                    </select>
                </div>
                <input type="search" name="search" class="search_ran">
                <input type="submit" name="submit" class="search_button" value="検索">
            </form>
        </div>
        <div class="group_link_button">
            <a class="group_link" id="js-show-popup">招待</a>
            <a href="{{ route('CreatedGroup') }}" class="group_link">2D</a>
            <a href="{{ route('ThreeGroup') }}" class="group_link">3D</a>
        </div>
        <div class="popup" id="js-popup">
            <div class="popup-inner">
                    <input id="copyTarget" type="text" class="copy_link" value="http://18.188.69.21/public/" readonly>
                    <button onclick="copyToClipboard()" class="copy_btn">コピー</button>
                </div>
                <div class="black-background" id="js-black-bg"></div>
            </div>
        </div>
        <div class="card">
            <div class="card_wrapper">
                <img src="{{$auth -> image}}"  alt="" class="card_image">
                <div class="card_text">
                    <ul>
                        <div class="card_text_left">
                            <li>名前</li>
                            <li>出身地</li>
                            <li>趣味</li>
                            <li>ひとこと</li>
                        </div>
                        <div class="card_text_right">
                            <li>{{ $auth -> name }}</li>
                            <li>{{ $auth -> area }}</li>
                            <li>{{ $auth -> hobby }}</li>
                            <li>{{ $auth -> word }}</li>
                        </div>
                    </ul>
                </div>
            </div>
            @foreach($users as $user)
            <div class="card_wrapper">
                <img src="{{  $user -> image }}"  alt="" class="card_image">
                <div class="card_text">
                    <ul>
                        <div class="card_text_left">
                            <li>名前</li>
                            <li>出身地</li>
                            <li>趣味</li>
                            <li>ひとこと</li>
                        </div>
                        <div class="card_text_right">
                            <li>{{ $user -> name }}</li>
                            <li>{{ $user -> area }}</li>
                            <li>{{ $user -> hobby }}</li>
                            <li>{{ $user -> word }}</li>
                        </div>
                    </ul>
                </div>
            </div>
            @endforeach
        </div>
        <!-- /.card -->
@endsection
