
    <a href="{{ route('home') }}"><img src="{{ asset('images/logo.png') }}" class="h_logo" ></a>
    <span class="description">GOSYOKAIとは</span>
    <nav class="nav">
        <ul class="header_nav">
            <a href="{{ route('Friend') }}"><li>フレンド</li></a>
            <a href="{{ route('CreatedGroup') }}"><li>グループ</li></a>
            <a href="{{ route('UpdateProfile') }}"><li>プロフィール編集</li></a>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <x-dropdown-link :href="route('logout')"
                onclick="event.preventDefault();
                this.closest('form').submit();" class="logout">
                {{ __('ログアウト') }}
                </x-dropdown-link>
            </form>
        </ul>
    </nav>
