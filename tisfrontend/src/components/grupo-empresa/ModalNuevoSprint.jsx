/* eslint-disable react/prop-types */
const ModalNuevoSprint = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <form action="" className="rounded-md bg-neutral-200 px-8 py-5 shadow">
        <span className="mb-4 flex justify-center text-2xl font-semibold text-primary-800">
          Nuevo sprint
        </span>
        <div className="">
          <label
            htmlFor="nombre_sprint"
            className="text-lg font-semibold text-primary-800"
          >
            Nombre del sprint
          </label>
          <br />
          <input
            id="nombre_sprint"
            type="text"
            className="my-2 w-full rounded-md border border-primary-500 p-2"
            placeholder="Ej: Sprint #1"
          />
        </div>

        <section className="flex gap-2">
          <div>
            <label
              htmlFor="fecha_ini"
              className="text-lg font-semibold text-primary-800"
            >
              Fecha inicio
            </label>
            <br />
            <input
              type="date"
              name=""
              id="fecha_ini"
              className="my-2 w-full rounded-md border border-primary-500 px-2 py-1"
            />
          </div>

          <div>
            <label
              htmlFor="fecha_fin"
              className="text-lg font-semibold text-primary-800"
            >
              Fecha fin
            </label>
            <br />
            <input
              type="date"
              name=""
              id="fecha_fin"
              className="my-2 w-full rounded-md border border-primary-500 px-2 py-1"
            />
          </div>
        </section>

        <section className="mt-2 flex gap-2 font-semibold">
          <button
            type="submit"
            className="w-full rounded bg-primary-600 p-2 text-white transition-colors hover:bg-primary-500"
          >
            Guardar
          </button>
          <button
            type="reset"
            className="w-full rounded border border-primary-500 p-2 text-primary-800 transition-colors hover:bg-neutral-100"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
};

export default ModalNuevoSprint;
