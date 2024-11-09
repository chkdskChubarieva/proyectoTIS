<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller; // Asegúrate de que esta línea esté presente
use App\Models\ProductBacklog;
use Illuminate\Http\Request;

class ProductBacklogController extends Controller
{
    public function getBacklogByEmpresa($idEmpresa)
    {
        // Obtener el Product Backlog de la empresa específica, junto con sus historias de usuario
        $backlog = ProductBacklog::where('ID_empresa', $idEmpresa)
            ->with('historias')
            ->first();

        if (!$backlog) {
            return response()->json(['message' => 'Product Backlog no encontrado para esta empresa'], 404);
        }

        return response()->json($backlog, 200);
    }
    public function getHistoriasByGrupoEmpresa($empresaId)
    {
        try {
            $grupoEmpresa = GrupoEmpresa::where('ID_empresa', $empresaId)
                ->with('productBacklogs.sprints.historiasUsuario')
                ->first();

            if (!$grupoEmpresa) {
                return response()->json(['error' => 'Grupo empresa no encontrado'], 404);
            }

            $historias = $grupoEmpresa->productBacklogs->flatMap(function ($productBacklog) {
                return $productBacklog->sprints->flatMap(function ($sprint) {
                    return $sprint->historiasUsuario;
                });
            });

            return response()->json($historias, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
    public function register(Request $request)
    {
        $request->validate([
            'ID_empresa' => 'required|exists:grupo_empresas,ID_empresa',
            // Agrega otras validaciones si es necesario, como campos adicionales para el product backlog.
        ]);

        try {
            // Creación del ProductBacklog
            $productBacklog = ProductBacklog::create([
                'ID_empresa' => $request->ID_empresa,
                // Añadir otros campos aquí si es necesario
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Product Backlog registrado con éxito.',
                'data' => $productBacklog,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al registrar el Product Backlog.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    
}
