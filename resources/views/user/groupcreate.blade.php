@extends('layout')
@section('content')
<div class="form_wrap">
    <div class="form_div">
        <div class="group_img"></div>
        <div class="form-group">
            <label class="form_label" for="InputGroup">グループ名</label>
            <div class="form_ran">
            <input type="Group" name="group" class="form_item" id="InputGroup">
            </div>
            <!--/form-group-->
        </div>
    <a href="{{ route('CreatedGroup') }}" class="form_login">グループ作成</a>
    </div>
</div>
<!-- /.form_wrap -->
<div class="footer_barance"></div>
@endsection
