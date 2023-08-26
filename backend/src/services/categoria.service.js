import Categoria from "../models/Categoria.model.js";

export const crearCategoria = async (categoria) => {
  return await Categoria.create(categoria);
};

export const obtenerCategorias = async () => {
  return await Categoria.find();
};

export const obtenerCategoria = async (id) => {
  return await Categoria.findById(id);
};

export const actualizarCategoria = async (id, categoria) => {
  return await Categoria.findByIdAndUpdate(id, categoria);
};

export const eliminarCategoria = async (id) => {
  return await Categoria.findByIdAndDelete(id);
};

export const obtenerCategoriaPorNombre = async (nombre) => {
  return await Categoria.findOne({ nombre });
};
