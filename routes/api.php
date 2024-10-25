<?php

use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Estudiante\EmpresaController;
use App\Http\Controllers\Api\Docente\EmpresaController as EmpresaDocente;

//Rutas publicas
Route::prefix('v1')->group(function () {

    //:public
    //Route::get('list', [FrontController::class, 'list']);
    //:auth
    Route::post("/auth/register", [AuthController::class, 'register']);
    Route::post("/auth/login", [AuthController::class, 'login']);
    //Rutas privadas
    Route::group(['middleware' => 'auth:sanctum'], function () {
        //::auth
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        //:: rol estudiante
        Route::apiResource('/estudiante/empresa', EmpresaController::class);
        //:: rol docente
        Route::apiResource('/docente/empresa', EmpresaDocente::class);
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
