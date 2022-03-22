@extends('layout')
@section('content')
    <div class="group_top"></div>
    <h1 class="group_h1">グループ<span class="group_people">(人数{{$users->count()}}人)</span></h1>
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
            <a href="#" class="group_link" id="js-show-popup">招待</a>
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
    <div class="footer_barance"></div>
    <div class="three-canvas"></div>
    <div class="footer_barance"></div>
    <script>
        let array = @json($users);
        let count = @json($count);
    </script>
@endsection
