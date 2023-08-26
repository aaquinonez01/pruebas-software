import Pelicula from "../models/Pelicula.model.js";

export const crearPelicula = async (pelicula) => {
  return await Pelicula.create(pelicula);
};

export const obtenerPeliculas = async () => {
  try {
    const peliculas = await Pelicula.find().populate("categoria");

    // Mapea las películas para obtener los datos necesarios
    const peliculasConCategorias = peliculas.map((pelicula) => ({
      id: pelicula._id,
      titulo: pelicula.titulo,
      descripcion: pelicula.descripcion,
      anio: pelicula.anio,
      imagenURL: pelicula.imagenURL,
      categoria: pelicula.categoria ? pelicula.categoria.nombre : null,
    }));

    return peliculasConCategorias;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const obtenerPelicula = async (id) => {
  return await Pelicula.findById(id);
};

export const actualizarPelicula = async (id, pelicula) => {
  return await Pelicula.findByIdAndUpdate(id, pelicula);
};

export const eliminarPelicula = async (id) => {
  return await Pelicula.findByIdAndDelete(id);
};

export const obtenerPeliculaPorNombre = async (nombre) => {
  return await Pelicula.findOne({ nombre });
};

export const obtenerPeliculasPorCategoria = async (category) => {
  return await Pelicula.find({ category });
};

export const obtenerPeliculasPorCategoriaId = async (category) => {
  return await Pelicula.find({ category });
};

export const obtenerPeliculasPorCategoriaNombre = async (category) => {
  return await Pelicula.find({ category });
};
