import React from "react";
import ReactDOM from "react-dom/client";
import LayoutPublic from "./layouts/LayoutPublic";
import PageHome from "./pagepublic/PageHome";
import LayoutEstudiante from "./layouts/LayoutEstudiante";
import LayoutDocente from "./layouts/LayoutDocente";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Register from "./pageauth/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Auth
import Login from "./pageauth/Login";

import '../css/app.css'

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route index element={<PageHome />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Route>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/estudiante" element={<LayoutEstudiante />}>
                        <Route index element={<PageHome />} />
                    </Route>
                    <Route path="/docente" element={<LayoutDocente />}>
                        <Route index element={<PageHome />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
