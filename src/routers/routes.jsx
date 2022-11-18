// * Creando las rutas

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { DetailMovie } from "../pages/DetailMovie";

export function MyRoutes() {
  return (
    // * indicamos las rutas de la pagina
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movies/:movieId" element={<DetailMovie />} />
      </Routes>
    </Router>
  );
}
