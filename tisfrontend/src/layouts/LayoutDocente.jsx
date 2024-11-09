import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SidebarDocente from "../components/grupo-empresa/SidebarDocente";

const LayoutDocente = () => {
  const { getRol } = AuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (getRol() != "docente") {
      navigate("/");
    }
  }, [getRol, navigate]);

  return (
    <>
      <Header />
      <Navbar />
      <section className="conteiner-GE">
        <div className="content-container">
          <SidebarDocente />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default LayoutDocente;
