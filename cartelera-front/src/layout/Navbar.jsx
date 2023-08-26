import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [categoriasDropdown, setCategoriasDropdown] = useState(false);
  const [peliculasDropdown, setPeliculasDropdown] = useState(false);

  const toggleCategoriasDropdown = () => {
    setCategoriasDropdown(!categoriasDropdown);
    setPeliculasDropdown(false);
  };

  const togglePeliculasDropdown = () => {
    setPeliculasDropdown(!peliculasDropdown);
    setCategoriasDropdown(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="relative">
              <button
                onClick={toggleCategoriasDropdown}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Categorías
              </button>
              {categoriasDropdown && (
                <div className="absolute mt-2 py-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-30">
                  <Link
                    to="/categorias"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setCategoriasDropdown(false)}
                  >
                    Lista de Categorías
                  </Link>
                  <Link
                    to="/nueva-categoria"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setCategoriasDropdown(false)}
                  >
                    Crear Nueva Categoría
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={togglePeliculasDropdown}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Películas
              </button>
              {peliculasDropdown && (
                <div className="absolute z-20 mt-2 py-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <Link
                    to="/peliculas"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setPeliculasDropdown(false)}
                  >
                    Lista de Películas
                  </Link>
                  <Link
                    to="/nueva-pelicula"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setPeliculasDropdown(false)}
                  >
                    Crear Nueva Película
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
