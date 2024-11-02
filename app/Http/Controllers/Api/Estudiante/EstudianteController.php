<?php

namespace App\Http\Controllers\Api\Estudiante;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Estudiante;

class EstudianteController extends Controller
{
    public function getInfoEst() {
        $user = Auth::user();
        //$estudiante = $user->estudiante;
       // $user_id = $user->id;
        //$estudiante = Estudiante::find(ID_usuario->ID_usuario);
        //$estudiante = Estudiante::where('ID_usuario',$user_id)->first();
        return response()->json([
            'nombre' => $user->nombre,
            'apellido' => $user->apellido,
            'correo' => $user->correo, 
            'cod_sis'=> $user->estudiante->cod_sis,
        ]);
    }
}