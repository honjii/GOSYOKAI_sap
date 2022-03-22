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
                <input type="file" id="example" name="image" class="login_img" accept=".png,.jpg,.jpeg,.svg,.gif,.jfif" multiple>画像
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
                    <select type="text" name="area" class="form_item" id="InputKen">
                        <option value="" selected>都道府県を選択してください</option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森県</option>
                        <option value="岩手県">岩手県</option>
                        <option value="宮城県">宮城県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="山形県">山形県</option>
                        <option value="福島県">福島県</option>
                        <option value="茨城県">茨城県</option>
                        <option value="栃木県">栃木県</option>
                        <option value="群馬県">群馬県</option>
                        <option value="埼玉県">埼玉県</option>
                        <option value="千葉県">千葉県</option>
                        <option value="東京都">東京都</option>
                        <option value="神奈川県">神奈川県</option>
                        <option value="新潟県">新潟県</option>
                        <option value="富山県">富山県</option>
                        <option value="石川県">石川県</option>
                        <option value="福井県">福井県</option>
                        <option value="山梨県">山梨県</option>
                        <option value="長野県">長野県</option>
                        <option value="岐阜県">岐阜県</option>
                        <option value="静岡県">静岡県</option>
                        <option value="愛知県">愛知県</option>
                        <option value="三重県">三重県</option>
                        <option value="滋賀県">滋賀県</option>
                        <option value="京都府">京都府</option>
                        <option value="大阪府">大阪府</option>
                        <option value="兵庫県">兵庫県</option>
                        <option value="奈良県">奈良県</option>
                        <option value="和歌山県">和歌山県</option>
                        <option value="鳥取県">鳥取県</option>
                        <option value="島根県">島根県</option>
                        <option value="岡山県">岡山県</option>
                        <option value="広島県">広島県</option>
                        <option value="山口県">山口県</option>
                        <option value="徳島県">徳島県</option>
                        <option value="香川県">香川県</option>
                        <option value="愛媛県">愛媛県</option>
                        <option value="高知県">高知県</option>
                        <option value="福岡県">福岡県</option>
                        <option value="佐賀県">佐賀県</option>
                        <option value="長崎県">長崎県</option>
                        <option value="熊本県">熊本県</option>
                        <option value="大分県">大分県</option>
                        <option value="宮崎県">宮崎県</option>
                        <option value="鹿児島県">鹿児島県</option>
                        <option value="沖縄県">沖縄県</option>
                        </select>
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
            <button class="form_login_new" type="submit">新規作成</button>
            </div>
            {{ csrf_field() }}
            </form>
            </div>
        </div>
    <div class="login_right">
        <h1 class="login_head2">プロフィールを登録しよう！</h1>
        <img src="{{ asset('images/main7.png') }}" class="section7_img" alt="">
        <p class="login_right_text">GOSYOKAIで新たな出会いを見つけよう</p>
    </div>
</div>
@endsection
