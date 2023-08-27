import base64Img from "base64-img";
import { v2 as cloudinary } from "cloudinary";
import {
  actualizarPelicula,
  crearPelicula,
  eliminarPelicula,
  obtenerPelicula,
  obtenerPeliculas
} from "../services/pelicula.service.js";
const peliculaController = {};

cloudinary.config({
  cloud_name: "dk1ryuitz",
  api_key: "916435366958164",
  api_secret: "T727ZS_8msWjR5c9AqqvN4UEM60",
});
peliculaController.getPelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = await obtenerPelicula(id);
    res.status(200).json({
      ok: true,
      message: "Pelicula Obtenida Correctamente",
      data: pelicula,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "No se pudo obtener la pelicula",
      data: error,
    });
  }
};

peliculaController.getPeliculas = async (req, res) => {
  try {
    const peliculas = await obtenerPeliculas();

    res.status(200).json({
      ok: true,
      message: "Peliculas Obtenidos Correctamente",
      data: peliculas,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "No se pudo obtener los peliculas",
      data: error,
    });
  }
};

peliculaController.postPelicula = async (req, res) => {
  try {
    const { body } = req;
    // codigo para obtener la imagen del body y subirla a cloudinary
    const filepath = await new Promise((resolve, reject) => {
      base64Img.img(body.imagenURL, "", "temp", (err, filepath) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(filepath);
        }
      });
    });

    // Cargar la imagen en Cloudinary desde el archivo temporal
    const result = await cloudinary.uploader.upload(filepath, {
      folder: "pelicula",
    });

    // Actualizar la URL de imagen en el contexto del body
    body.imagenURL = result.secure_url;
    const peliculaNuevo = await crearPelicula(body);
    res.status(201).json({
      ok: true,
      message: "Pelicula Creada Correctamente",
      data: {
        id: peliculaNuevo._id,
        titulo: peliculaNuevo.nombre,
        categoria: peliculaNuevo.categoria,
        imagenURL: peliculaNuevo.imagen,
        descripcion: peliculaNuevo.descripcion,
        anio: peliculaNuevo.anio,
        imagenURL: peliculaNuevo.imagen,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "No se pudo crear la pelicula",
      data: error,
    });
  }
};

peliculaController.putPelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const peliculaActualizado = await actualizarPelicula(id, body);
    res.status(200).json({
      ok: true,
      message: "Pelicula Actualizado Correctamente",
      data: {
        id: peliculaActualizado._id,
        nombre: peliculaActualizado.nombre,
        categoria: peliculaActualizado.categoria,
        imagenURL: peliculaActualizado.imagen,
        descripcion: peliculaActualizado.descripcion,
        anio: peliculaActualizado.anio,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "No se pudo actualizar la pelicula",
      data: error,
    });
  }
};

peliculaController.deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const peliculaEliminado = await eliminarPelicula(id);
    res.status(200).json({
      ok: true,
      message: "Pelicula Eliminado Correctamente",
      data: peliculaEliminado,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "No se pudo eliminar la pelicula",
      data: error,
    });
  }
};

export default peliculaController;
