<?php

namespace App\Http\Controllers\Api;

use App\Models\Docente;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class DocenteController extends Controller
{
    public function index(): JsonResponse
    {
        $docentes = Docente::with('user')->get();

        return response()->json([
            'success' => true,
            'data' => $docentes,
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $docente = Docente::with('user')->find($id);

        if (!$docente) {
            return response()->json(['success' => false, 'message' => 'Docente no encontrado.'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $docente,
        ]);
    }
}
