<?php

namespace App\Http\Controllers\Api\Estudiante;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Estudiante;
use App\Models\Docente;
use App\Models\GrupoEmpresa;
use Illuminate\Http\JsonResponse;

class EstudianteController extends Controller
{
    public function getInfoEst()
    {
        $user = Auth::user();
        $idGrupoEmpresa = $user->estudiante->ID_empresa;
        $datosEmpresa = GrupoEmpresa::where("ID_empresa", $idGrupoEmpresa)->first();
        if (!$datosEmpresa) {
            return response()->json([
                'nombre' => $user->nombre,
                'apellido' => $user->apellido,
                'correo' => $user->correo,
                'cod_sis' => $user->estudiante->cod_sis,
                'datosEmpresa' => null,
                'datosDocente' => null
            ]);
        } else {
            $idDocente = GrupoEmpresa::where("ID_empresa", $idGrupoEmpresa)->first()->ID_docente;
            $datosDocente = Docente::where("ID_docente", $idDocente)->first()->user;
            return response()->json([
                'nombre' => $user->nombre,
                'apellido' => $user->apellido,
                'correo' => $user->correo,
                'cod_sis' => $user->estudiante->cod_sis,
                'datosEmpresa' => $datosEmpresa,
                'datosDocente' => $datosDocente
            ]);
        }
    }

    public function getEmpresas(): JsonResponse
    {
        // Obtener el ID del docente autenticado
        $user = Auth::user();
        $docenteId = $user->docente->ID_docente;

        // Filtrar las grupo empresas según el ID del docente
        $grupoEmpresas = GrupoEmpresa::where('ID_docente', $docenteId)
            ->get(['ID_empresa', 'nombre_empresa', 'correo_empresa', 'logo_empresa']);

        return response()->json($grupoEmpresas);
    }


    public function updateGrupoEmpresa(Request $request, $id)
    {
        // Validar la entrada
        $request->validate([
            'ID_empresa' => 'required|exists:grupo_empresas,ID_empresa',
        ]);

        // Buscar al estudiante por su ID
        $estudiante = Estudiante::find($id);

        if (!$estudiante) {
            return response()->json(['message' => 'Estudiante no encontrado'], 404);
        }

        // Actualizar el ID de la empresa
        $estudiante->ID_empresa = $request->ID_empresa;
        $estudiante->save();

        return response()->json(['message' => 'ID de empresa actualizado exitosamente', 'estudiante' => $estudiante]);
    }

    /*
    public function showInfoEstudent(int $id): JsonResponse
    {
        $estudiante = Estudiante::with('user')->find($id);

        if (!$estudiante) {
            return response()->json(['success' => false, 'message' => 'Estudiante no encontrado.'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $estudiante,
        ]);
    }
    */
}
