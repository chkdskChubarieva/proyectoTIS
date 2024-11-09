import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InfoUsuario from "../components/InfoUsuario";
import PlaceholderIMG from "../assets/img/no-image.jpg";
import "../components/background.css";

const InfoGrupoEmpresa = () => {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState(null);
  const [cantEstudiantes, setCantEstudiantes] = useState(null);
  const base_api_url = "http://localhost:8000/api/v1";

  useEffect(() => {
    axios
      .get(`${base_api_url}/docente/empresas/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        // Asigna los valores correspondientes a cada estado
        setEmpresa(response.data.empresa);
        setCantEstudiantes(response.data.cantidad_estudiantes);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la empresa:", error);
      });
  }, [id]);

  if (!empresa) {
    return <p>Cargando datos de la empresa...</p>;
  }

  return (
    <section className="w-full pt-8 bg-white background">
      <div className="mx-auto w-fit">
        <article className="px-6 py-5 mx-auto text-white rounded-md bg-primary-600">
          <h1 className="flex justify-center mb-4 text-xl font-semibold">
            Información de grupo-empresa
          </h1>
          <section className="flex gap-10">
            <div className="space-y-2 min-w-96 max-w-fit">
              <InfoUsuario
                icono={<i className="fa-solid fa-building"></i>}
                titulo={"Grupo-empresa: "}
                info={empresa.nombre_empresa}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-user"></i>}
                titulo={"Representante legal: "}
                info={empresa.nombre_representante}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-envelope"></i>}
                titulo={"Correo electrónico: "}
                info={empresa.correo_empresa}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-building"></i>}
                titulo={"Teléfono: "}
                info={empresa.telf_representante}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-users"></i>}
                titulo={"Cantidad de miembros: "}
                info={cantEstudiantes}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-building"></i>}
                titulo={"Código: "}
                info={empresa.codigo}
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden rounded-3xl">
              <img src={PlaceholderIMG} className="object-cover size-40 rounded-3xl" />
            </div>
          </section>

          <section className="flex gap-5 mt-5">
            <button
              type="button"
              className="w-full p-2 text-lg font-semibold text-white transition-colors rounded bg-primary-500 hover:bg-primary-400"
            >
              Ver planificacion de sprint
            </button>
            <button
              type="button"
              className="w-full p-2 text-lg font-semibold text-white transition-colors rounded bg-primary-500 hover:bg-primary-400"
            >
              Ver planilla de evaluación
            </button>
          </section>
        </article>
      </div>
    </section>
  );
};

export default InfoGrupoEmpresa;
