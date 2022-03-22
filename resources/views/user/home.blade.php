@extends('before')
@section('content')
        <div class="header_wrap">
            <div class="home_logo_wrap">
                <a href="#"><img src="{{ asset('images/home_logo.png') }}" class="home_logo" ></a>
            </div>
            <nav class="nav">
                <ul class="header_top_navi">
                    <a href="{{ route('login') }}"><li>ログイン</li></a>
                    <a href="{{ route('register') }}"><li>新規会員登録</li></a>
                    <a href="#section2"><li>ご利用の流れ</li></a>
                    <a href="#section3"><li>導入メリット</li></a>
                </ul>
            </nav>
        </div>
    <div class="three-canvas"></div>
    <div class="padding_hero"></div>
    <section class="section1" id="section1">
        <div class="section_wrapper">
        <h1 class="section1_h1">GOSYOKAI<span class="f-small">で新たな出会いを見つけよう</span></h1>
        <p class="f-small section1_line">GOSYOKAIはあなたの自己紹介を有意義にします<br>新たな自己紹介を始めましょう</p>
        <div class="section_btn">
        @if (Route::has('login'))
        @if (Route::has('register'))
        <a class="new" href="{{ route('register') }}">新規登録</a>
        @endif
        <a class="login" href="{{ route('login') }}">ログイン</a>
        @endif
        </div>
        </div>
    </section>
    <section class="section2" id="section2">
        <h1 class="section2_head">ご利用の流れ</h1>
        <div class="section2_detail">
            <div class="text-left">
                <img src="{{ asset('images/main1.png') }}" class="section2_img" alt="">
                <p class="section2_text1">プロフィールを入力</p>
                <p class="section2_text2">プロフィールを入力しよう！<br>自己紹介カードを作って、<br>お友達を探しにいこう！</p>
            </div>
            <p class="arrow">→</p>
            <div class="text-left">
                <img src="{{ asset('images/main2.png') }}" class="section2_img" alt="">
                <p class="section2_text1">お友達を探そう</p>
                <p class="section2_text2">気になるお友達の自己紹介を<br>見にいこう！豊富な検索方法が<br>あるので、探しやすい！</p>
            </div>
            <p class="arrow">→</p>
            <div class="text-left" >
                <img src="{{ asset('images/main3.png') }}" class="section2_img" alt="">
                <p class="section2_text1">お友達と繋がろう</p>
                <p class="section2_text2">自己紹介をしてお友達になろう<br>自己紹介カードを交換すれば<br>相手の情報が後からみれる</p>
            </div>
        </div>
    </section>
    <section class="section3" id="section3">
        <h1 class="section3_head">GOSYOKAIを導入するメリット
        </h1>
        <div class="section3_detail">
            <div class="text-center">
                <p class="section3_text">共通の趣味や出身地の<br>人物を見つけられる</p>
                <img src="{{ asset('images/main4.png') }}" class="section3_img" alt="">
            </div>
            <div class="text-center">
                <p class="section3_text">
                    相手の情報を見返せる
                </p>
                <img src="{{ asset('images/main5.png') }}" class="section3_img img_top" alt="">
            </div>
            <div class="text-center" >
                <p class="section3_text">
                    一度作った自己紹介を<br>何度も使いまわせる
                </p>
                <img src="{{ asset('images/main6.png') }}" class="section3_img" alt="">
            </div>
        </div>
    </section>
    <section class="section4" id="section4">
        <h1 class="section4_h1">GOSYOKAIを始めてみる
        </h1>
        <a class="section4_button" href="{{ route('register') }}">新規登録</a>
    </section>
    <div class="footer_barance"></div>
@endsection
