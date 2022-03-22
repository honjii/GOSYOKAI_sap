<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\User;

class Profile extends Model
{
    /**
 * IDから一件のデータを取得する
 */
public function selectUserFindById($id)
{
    // 「SELECT id, name, email WHERE id = ?」を発行する
    $query = $this->select([
        'name',
        'image',
        'hobby',
        'area',
        'word'
    ])->where([
        'id' => $id
    ]);
    // first()は1件のみ取得する関数
    return $query->first();
}
}
