<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grupo_Empresa extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'grupo_empresas';
    public function user(){
       // return $this->hasMany(User::class);
    }
}
