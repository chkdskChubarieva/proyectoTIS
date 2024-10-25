<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Las políticas de tu aplicación.
     *
     * @var array
     */
    protected $policies = [
        'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Registra cualquier servicio de autenticación o autorización.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Definir Gates o permisos personalizados aquí, si los tienes
        // Ejemplo:
        // Gate::define('view-dashboard', function ($user) {
        //     return $user->isAdmin();
        // });
    }
}