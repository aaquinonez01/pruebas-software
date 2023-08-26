import { useEffect, useState } from "react";
import { peliculaService } from "../../services/pelicula.service";

export const usePelicula = () => {
  const [peliculas, setPeliculas] = useState([]);
  const getPeliculas = () => {
    peliculaService
      .getAll()
      .then(response => {
        console.log(response);
        setPeliculas(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  

  useEffect(() => {
    getPeliculas();
  }, []);
  return {
    peliculas,

  }
}
