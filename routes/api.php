<?php

use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Estudiante\EmpresaController;
use App\Http\Controllers\Api\Docente\EmpresaController as EmpresaDocente;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;


//Rutas publicas
Route::prefix('v1')->group(function () {

    //:public
    //Route::get('list', [FrontController::class, 'list']);
    //:auth
    Route::post("/auth/register", [AuthController::class, 'register']);
    Route::post("/auth/registerDoc", [AuthController::class, 'registerDoc']);
    Route::post("/auth/login", [AuthController::class, 'login']);
    Route::post("/auth/loginDoc", [AuthController::class, 'loginDoc']);
    //Rutas privadas
    Route::group(['middleware' => 'auth:sanctum'], function () {
        //::auth
        Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
        //:: rol estudiante
        Route::apiResource('/estudiante/empresa', EmpresaController::class);
        //:: rol docente
        Route::apiResource('/docente/empresa', EmpresaDocente::class);
    });
});

Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    'auth:sanctum'
])->get('/user', function (Request $request) {
    return $request->user();
});

//Route::middleware(['cors'])->group(function () {
    //Route::get('/example', 'ExampleController@index');
//});