<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/update', 'App\Http\Controllers\UsersController@UpdateProfile' )->name('UpdateProfile');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


//GOSYOKAI紹介ページを表示
Route::get('/', 'App\Http\Controllers\UsersController@Home' )->name('home');

Route::get('/home', 'App\Http\Controllers\UsersController@showList' )->name('home');

Route::get('/profilecard', 'App\Http\Controllers\UsersController@getSignup' )->name('Profilecard');

//profcard編集
Route::post('/profilestore', 'App\Http\Controllers\UsersController@profUpdate' )->name('Update');

//login
Route::get('/signin', 'App\Http\Controllers\UsersController@getSignin' )->name('Signin');

//Profileupdate
Route::get('/updateprofile', 'App\Http\Controllers\UsersController@UpdateProfile' )->name('UpdateProfile');

//groupcreate
Route::get('/groupcreate', 'App\Http\Controllers\UsersController@GroupCreate' )->name('GroupCreate');

//InGroup
Route::get('/ingroup', 'App\Http\Controllers\UsersController@InGroup' )->name('InGroup');

//group
Route::get('/group', 'App\Http\Controllers\UsersController@Group' )->name('Group');

//createdgroup
Route::get('/createdgroup', 'App\Http\Controllers\UsersController@CreatedGroup' )->name('CreatedGroup');

Route::post('/createdgroup', 'App\Http\Controllers\UsersController@PostSearch' )->name('Search');

//threegroup
Route::get('/threegroup', 'App\Http\Controllers\UsersController@ThreeGroup' )->name('ThreeGroup');

//friend
Route::get('/friend', 'App\Http\Controllers\UsersController@ShowList' )->name('Friend');
Route::post('/friend', 'App\Http\Controllers\UsersController@Friendsearch' )->name('Friendsearch');
