import { Route, Routes } from "react-router-dom";
import { PeliculaDetailPage } from "../cartelera/pages/PeliculaDetailPage";
import PeliculaForm from "../cartelera/pages/PeliculaForm";
import PeliculasPage from "../cartelera/pages/PeliculasPage";
import { CategoriaForm } from "../categoria/pages/CategoriaForm";
import { CategoriaPage } from "../categoria/pages/CategoriaPage";
import Navbar from "../layout/Navbar";
import { HomePage } from "../pages/HomePage";

export const AppRoute = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/categorias"
          element={<CategoriaPage />}
        />
        <Route
          path="/peliculas"
          element={<PeliculasPage />}
        />
        <Route
          path="/peliculas/:id"
          element={<PeliculaDetailPage />}
        />
        <Route
          path="/categorias/:id"
          element={<CategoriaForm />}
        />
        <Route
          path="/nueva-categoria"
          element={<CategoriaForm />}
        />
        <Route
          path="/nueva-pelicula"
          element={<PeliculaForm />}
        />
      </Routes>
    </div>
  );
};
