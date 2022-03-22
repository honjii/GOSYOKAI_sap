<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{
    //ユーザー 一覧を表示する
    // @return view

    public function ShowList(){
        $auth = Auth::user();
        $users = User::all();
        $another_user = $users->where('id','!=' ,$auth->id);
        $users = $another_user;
        return view('user.friend',['users' => $users],['auth' => Auth::user()]);
    }
    public function Friendsearch(Request $request){
        $auth = Auth::user();
        $users = User::all();
        $another_user = $users->where('id','!=' ,$auth->id);
        $users = $another_user;
        // 検索フォームで入力された値を取得する
        $search = $request->input('search');
        // クエリビルダ
        $query = User::query();
       // もし検索フォームにキーワードが入力されたら
        $category = $request->input("sources");
        if ($search !== null) {
                // 全角スペースを半角に変換
                $spaceConversion = mb_convert_kana($search, 's');
                // 単語を半角スペースで区切り、配列にする（例："山田 翔" → ["山田", "翔"]）
                $wordArraySearched = preg_split('/[\s,]+/', $spaceConversion, -1, PREG_SPLIT_NO_EMPTY);
                // 単語をループで回し、ユーザーネームと部分一致するものがあれば、$queryとして保持される
                foreach($wordArraySearched as $value) {
                    $query->where('name', 'like', '%'.$value.'%');
                }
                // 上記で取得した$queryをページネートにし、変数$usersに代入
                $users = $query->paginate(1000);
            }
        return view('user.friend',['users' => $users],['auth' => Auth::user()]);
    }
    public function Home(){
        return view('user.home',['auth' => Auth::user()]);
    }
    public function getSignin(){
    return View('user.signin');
    }
    public function UpdateProfile(Request $request){
        $users = User::all();
    return View('user.updateprofile',['users' => $users],['auth' => Auth::user()]);
    }
    public function GroupCreate(){
    return View('user.groupcreate');
    }
    public function InGroup(){
    return View('user.ingroup');
    }
    public function Group(){
    return View('user.group');
    }
    public function ThreeGroup(){
    $auth = Auth::user();
    $users = User::all();
    $count = User::count();
    return View('user.threegroup',['count' => $count],['users' => $users],['auth' => Auth::user()]);
    }

    public function CreatedGroup(){
    $auth = Auth::user();
    $users = User::all();
    $another_user = $users->where('id','!=' ,$auth->id);
    $users = $another_user;
    return View('user.createdgroup',['users' => $users],['auth' => Auth::user()]);
    }
    public function PostSearch(Request $request){
        // ユーザー一覧をページネートで取得
        $auth = Auth::user();
        $users = User::all();
        $another_user = $users->where('id','!=' ,$auth->id);
        $users = $another_user;
        // 検索フォームで入力された値を取得する
        $search = $request->input('search');
        // クエリビルダ
        $query = User::query();
       // もし検索フォームにキーワードが入力されたら
        $category = $request->input("sources");
       //名前の時
        if( $category == "area"){
            if ($search !== null) {
                // 全角スペースを半角に変換
                $spaceConversion = mb_convert_kana($search, 's');

                // 単語を半角スペースで区切り、配列にする（例："山田 翔" → ["山田", "翔"]）
                $wordArraySearched = preg_split('/[\s,]+/', $spaceConversion, -1, PREG_SPLIT_NO_EMPTY);
                // 単語をループで回し、ユーザーネームと部分一致するものがあれば、$queryとして保持される
                foreach($wordArraySearched as $value) {
                    $query->where('area', 'like', '%'.$value.'%');
                }
                // 上記で取得した$queryをページネートにし、変数$usersに代入
                $users = $query->paginate(20);
            }else if ($search == null){
                $area = Auth::user()->area;
                $same_area = $users->where('area','=' ,$area);
                $users = $same_area;
            }
        }else if( $category == "hobby"){
            if ($search !== null) {
                // 全角スペースを半角に変換
                $spaceConversion = mb_convert_kana($search, 's');
                // 単語を半角スペースで区切り、配列にする（例："山田 翔" → ["山田", "翔"]）
                $wordArraySearched = preg_split('/[\s,]+/', $spaceConversion, -1, PREG_SPLIT_NO_EMPTY);
                // 単語をループで回し、ユーザーネームと部分一致するものがあれば、$queryとして保持される
                foreach($wordArraySearched as $value) {
                    $query->where('hobby', 'like', '%'.$value.'%');
                }
                // 上記で取得した$queryをページネートにし、変数$usersに代入
                $users = $query->paginate(20);
            }else if ($search == null){
                $hobby = Auth::user()->hobby;
                $same_hobby = $users->where('hobby','=' ,$hobby);
                $users = $same_hobby;
            }
        }
        else if( $category == null){
            if ($search !== null) {
                // 全角スペースを半角に変換
                $spaceConversion = mb_convert_kana($search, 's');

                // 単語を半角スペースで区切り、配列にする（例："山田 翔" → ["山田", "翔"]）
                $wordArraySearched = preg_split('/[\s,]+/', $spaceConversion, -1, PREG_SPLIT_NO_EMPTY);
                // 単語をループで回し、ユーザーネームと部分一致するものがあれば、$queryとして保持される
                foreach($wordArraySearched as $value) {
                    $query->where('name', 'like', '%'.$value.'%');
                }
                $users = $query->paginate(20);
            }
        }
        return View('user.createdgroup',['users' => $users],['auth' => Auth::user()]);
    }
    public function getSignup(){
    return View('user.profilecard',['auth' => Auth::user()]);
    }
    //ユーザー情報の登録
    public function profUpdate(Request $request){
        // 現在認証しているユーザーを取得
        $auth_all = $request->all();
        $auth = Auth::user();
        $users = User::all();
        $another_user = $users->where('id','!=' ,$auth->id);
        $users = $another_user;
        //ファイルのオリジナルデータを取得
        if (file_exists($request->image)){
        $file_name = $request->file('image')->getClientOriginalName();
        $request->file('image')->storeAs('public',$file_name);
        $image_path ='../storage/app/public/'.$file_name;
        $auth->fill($auth_all)->save();
        }else {
            $image_path ='../storage/app/public/defult.jpeg';
            $auth->fill($auth_all)->save();
        };
        $auth->image=$image_path;
        $auth->save();
        \Session::flash('err_msg','プロフィールを更新しました');
        return View('user.friend',['users' => $users],['auth' => $auth]);
    }
    protected $user;

    public function index()

    {

    $auth = Auth::user();

    return view('user.profilecard',[ 'auth' => $auth ]);

    }


}
