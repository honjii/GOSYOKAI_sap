@extends('layout')
@section('content')
<div class="form_wrap">
    <div class="form_div">
        <div class="form-group">
            <label class="form_label" for="InputEmail">メールアドレス</label>
            <div class="form_ran">
            <input type="email" name="email" class="form_item" id="InputEmail">
            </div>
            <!--/form-group-->
        </div>
        <div class="form-group">
            <label class="form_label" for="InputPassword">パスワード</label>
            <div class="form_ran">
            <input type="password" name="password" class="form_item" id="InputPassword">
            </div>
        <!--/form-group-->
        </div>
    <a href="#" class="form_login">ログイン</a>
    </div>
</div>
<!-- /.form_wrap -->
<div class="footer_barance"></div>
@endsection
