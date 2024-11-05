import { useState } from "react";
import ItemBacklog from "./ItemBacklog";
import ItemTablaSprint from "./ItemTablaSprint";
import ModalCrearHU from "./ModalCrearHU";
import "./ProductBacklog.css";

const ProductBacklog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && <ModalCrearHU closeModal={closeModal} />}
      <div className="product-backlog w-full px-10 py-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-primary-800">
            Product Backlog
          </h1>
          <button
            type="button"
            className="space-x-2 rounded-md bg-primary-500 p-2 text-white transition-colors hover:bg-primary-400"
            onClick={openModal}
          >
            <i className="fa-solid fa-plus"></i>
            <span>Historia de usuario</span>
          </button>
        </div>

        <div className="mt-5 flex gap-8">
          <section className="tabla-backlog flex-1 rounded-md border border-primary-800">
            <div className="flex justify-between border-b border-primary-800 px-6 py-3 font-semibold text-primary-800">
              <span>Historia de usuario</span>
              <span># Sprint</span>
            </div>

            <div className="space-y-2 p-3">
              <ItemBacklog
                id_hu={"1"}
                nombre_hu={"Historia de usuario 1"}
                num_sprint={"1"}
              />

              <ItemBacklog
                id_hu={"2"}
                nombre_hu={"Historia de usuario 2"}
                num_sprint={"1"}
              />

              <ItemBacklog
                id_hu={"3"}
                nombre_hu={"Historia de usuario 3"}
                num_sprint={"2"}
              />

              <ItemBacklog
                id_hu={"4"}
                nombre_hu={"Historia de usuario 4"}
                num_sprint={"2"}
              />
            </div>
          </section>

          <section className="tabla-sprint rounded-md border border-primary-800">
            <div className="flex justify-between border-b border-primary-800 px-6 py-3 font-semibold text-primary-800">
              <span>Sprints</span>
              <button
                type="button"
                className="flex size-6 items-center justify-center rounded border-2 border-primary-200 text-primary-200 transition-colors hover:border-primary-500 hover:text-primary-500"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <div className="space-y-2 p-3">
              <ItemTablaSprint nombre_sprint={"Sprint 1"} />

              <ItemTablaSprint nombre_sprint={"Sprint 2"} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductBacklog;
