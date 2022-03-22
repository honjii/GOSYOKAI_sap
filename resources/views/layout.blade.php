<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>GOSYOKAI</title>
<link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<!-- three.jsの読み込み -->
    <script src="{{ asset('js/three.min.js') }}"></script>
    <script src="{{ asset('js/OrbitControls.js') }}"></script>
    <script src="{{ asset('js/CSS3DRenderer.js') }}"></script>

    <!-- GSAP関連のjs -->
    <script src="{{ asset('js/gsap.min.js') }}"></script>
    <script src="{{ asset('js/gsap.Ease.js') }}"></script>
    <script src="{{ asset('js/gsap.Easep.js') }}"></script>
    <script src="{{ asset('js/gsap.Scroll.js') }}"></script>
    <script src="{{ asset('js/MotionPathPlugin.js') }}"></script>
    <script src="{{ asset('js/MotionPathHelper.js') }}"></script>

    <!-- three.jsをつかったプログラム -->
    <script src="{{ asset('js/threed.js') }}"></script>
    <script>
        window.addEventListener("load", init);

      //htmlがロードされたら実行される関数
        function init() {
        // three.jsをつかったプログラム
        threed
        ();
        }
    </script>
</head>
<body>
    <header>
    @include('./layouts/header')
    </header>
    <div class="wrapper">
    @yield('content')
    </div>
    <footer>
    @include('./layouts/footer')
    </footer>
    <script src="{{ asset('js/imageset.js') }}"></script>
    <script src="{{ asset('js/popup.js') }}"></script>
    <script src="{{ asset('js/copytext.js') }}"></script>
</body>
</html>
