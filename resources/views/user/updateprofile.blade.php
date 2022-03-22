@extends('layout')
@section('content')
<div class="login_wrap">
    <div class="login_left">
        <h1 class="login_head">プロフィール</h1>
        <form action="{{ route('Update') }}" method="post" enctype="multipart/form-data">
            @csrf
            <!-- 画像 -->
        <div id="imgfile">
            <label class="file_img">
                <!-- <input id=”image” type="file" name="image" class="login_img"> -->
                <input type="file" id="example" name="image" class="login_img" accept=".png,.jpg,.jpeg,.svg,.gif,.jfif" multiple>
                画像
            </label>
        </div>
        <div id="preview"></div>
        <!-- /#imgfile -->
        <div class="form_wrap">
            <div class="form_div">
            <div class="form-group2">
                <label class="form_label" for="InputName">名前</label>
                <div class="form_ran">
                <input type="text" name="name" class="form_item" id="InputName" value="{{$auth->name}}">
                </div>
                <!--/form-group-->
            </div>
            <div class="form-group2">
                <label class="form_label" for="InputHobby">趣味</label>
                <div class="form_ran">
                <input type="text" name="hobby" class="form_item" id="InputHobby" value="{{$auth->hobby}}">
                </div>
                <!--/form-group-->
            </div>
            <div class="form-group2">
                <label class="form_label" for="InputKen">出身地</label>
                <div class="form_ran">
                <input type="text" name="area" class="form_item" id="Inputarea" value="{{$auth->area}}">
                </div>
                <!--/form-group-->
            </div>
            <div class="form-group2">
                <label class="form_label" for="Inputprofile">ひとこと</label>
                <div class="form_ran">
                    <input type="text" name="word" class="form_item" id="Inputprofile" value="{{$auth->word}}">
                </div>
                <!--/form-group-->
            </div>
        <button class="form_login_new" type="submit">更新する</button>
        </div>
        {{ csrf_field() }}
        </form>
        </div>
        </div>
        <div class="login_right">
            <h1 class="login_head3">現在のプロフィールカード</h1>
            <div class="plofile_card">
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
            </div>
    </div>
</div>
@endsection
