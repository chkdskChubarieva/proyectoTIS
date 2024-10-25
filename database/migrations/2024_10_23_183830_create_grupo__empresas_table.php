<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('grupo_empresas', function (Blueprint $table) {
            $table->id('ID_empresa');
            $table->string('nombre_empresa');
            $table->string('nombre_corto');
            $table->string('correo_empresa')->unique();
            $table->string('nombre_representante');
            $table->string('telf_representante', 8);
            $table->unsignedBigInteger('ID_estudiante')->unique();
            $table->foreign('ID_estudiante')
                ->references('ID_estudiante')
                ->on('estudiantes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->string('logo_empresa', 200)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grupo_empresas');
    }
};
