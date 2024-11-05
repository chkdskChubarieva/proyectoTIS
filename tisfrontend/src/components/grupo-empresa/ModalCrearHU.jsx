const ModalCrearHU = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <form
        action=""
        className="max-w-3xl rounded-md bg-neutral-200 px-8 py-5 shadow"
      >
        <span className="mb-4 flex justify-center text-2xl font-semibold text-primary-800">
          Nueva historia de usuario
        </span>
        <section className="flex gap-5">
          <div className="">
            <label
              htmlFor="titulo"
              className="text-lg font-semibold text-primary-800"
            >
              Titulo
            </label>
            <br />
            <input
              type="text"
              className="my-2 rounded-md border border-primary-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="sprint"
              className="text-lg font-semibold text-primary-800"
            >
              Sprint
            </label>
            <br />
            <select
              name=""
              id="sprint"
              className="my-2 rounded-md border border-primary-500 p-2"
            >
              <option value="" disabled selected>
                Selecciona un sprint
              </option>
              <option value="sprint1">Sprint 1</option>
              <option value="sprint2">Sprint 2</option>
              <option value="sprint3">Sprint 3</option>
            </select>
          </div>
        </section>

        <label
          htmlFor="descripcion"
          className="text-lg font-semibold text-primary-800"
        >
          Descripción
        </label>
        <br />
        <textarea
          name=""
          id="descripcion"
          className="my-2 w-full resize-none rounded-md border border-primary-500 p-2"
          rows="3"
        ></textarea>

        <section className="flex gap-2 font-semibold">
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

export default ModalCrearHU;
