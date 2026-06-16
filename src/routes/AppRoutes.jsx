import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Residuos from "../pages/Residuos";
import Gestores from "../pages/Gestores";
import Certificados from "../pages/Certificados";
import Indicadores from "../pages/Indicadores";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/residuos" element={<Residuos />} />
      <Route path="/gestores" element={<Gestores />} />
      <Route path="/certificados" element={<Certificados />} />
      <Route path="/indicadores" element={<Indicadores />} />
    </Routes>
  );
}

export default AppRoutes;
