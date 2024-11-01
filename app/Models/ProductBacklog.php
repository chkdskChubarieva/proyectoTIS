<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductBacklog extends Model
{
    use HasFactory;

    protected $table = 'product_backlogs';
    protected $primaryKey = 'ID_pb';

    protected $fillable = [
        'puntuacion_pb',
        'observacion_pb',
        'ID_empresa',
    ];

    public function grupoEmpresa()
    {
        return $this->belongsTo(Grupo_Empresa::class, 'ID_empresa');
    }

    public function sprintBacklogs()
    {
        return $this->hasMany(SprintBacklog::class, 'ID_pb');
    }
}
