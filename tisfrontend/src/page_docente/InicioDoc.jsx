import { useState, useEffect } from "react";
import InfoUsuario from "../components/InfoUsuario";
import Config from "../Config";
import PlaceholderIMG from "../assets/img/no-image.jpg";

const InicioDoc = () => {
  //const botonesNavbar = [{ nombreBoton: " ", hrefBoton: "#" }];
  const [docente, setDocente] = useState({});

  useEffect(() => {
    getInfoDoc();
  }, []);

  const getInfoDoc = async () => {
    try {
      const response = await Config.getInfoDoc();
      console.log(response);
      setDocente(response.data);
    } catch (error) {
      console.error("Error al obtener la información del estudiante:", error);
    }
  };

  return (
    <section className="w-full pt-8 bg-white">
      <div className="mx-auto w-fit">
        <div className="p-3 my-4 text-center rounded-md bg-primary-600">
          <span className="text-xl font-semibold text-white">
            Bienvenido tu espacio de trabajo
          </span>
        </div>

        <article className="px-6 py-5 mx-auto text-white rounded-md w-fit bg-primary-600">
          <h1 className="flex justify-center mb-4 text-lg font-semibold">
            Información de usuario
          </h1>
          <section className="flex gap-10">
            <div className="space-y-2 min-w-80 max-w-fit">
              <InfoUsuario
                icono={<i className="fa-solid fa-user"></i>}
                titulo={"Usuario: "}
                info={`${docente.nombre} ${docente.apellido}`}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-envelope"></i>}
                titulo={"Correo: "}
                info={docente.correo}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-id-badge"></i>}
                titulo={"Nombre de usuario: "}
                info={docente.nombre_usuario}
              />

              <InfoUsuario
                icono={<i className="fa-solid fa-building"></i>}
                titulo={"Grupo empresas asignadas: "}
                info={docente.nroGrupoEmpresas}
              />
            </div>

            <div className="relative flex items-center">
              <img
                src={PlaceholderIMG}
                alt="avatar-usuario"
                className="absolute rounded-full size-32"
              />
              <img
                src={`https://ui-avatars.com/api/?size=100&bold=true&rounded=true&name=${docente.nombre}+${docente.apellido}`}
                alt="avatar-usuario"
                className="relative z-10 size-32"
                loading="lazy"
              />
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default InicioDoc;
