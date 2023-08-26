import {
  actualizarCategoria,
  crearCategoria,
  eliminarCategoria,
  obtenerCategoria,
  obtenerCategorias,
} from "../services/categoria.service.js";

const categoriaController = {};

categoriaController.postCategoria = async (req, res) => {
  try {
    const { body } = req;
    const categoriaNueva = await crearCategoria(body);
    res.status(201).json({
      ok: true,
      data: {
        nombre: categoriaNueva.nombre,
        id: categoriaNueva.id,
        descripcion: categoriaNueva.descripcion,
      },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

categoriaController.getCategorias = async (req, res) => {
  try {
    const categorias = await obtenerCategorias();
    //quitarle a las ctegorias datos innecesarios y dejarles solo id, nombre, descripcion
    const categoriasLimpio = categorias.map((categoria) => {
      const { _id, __v, ...categoriaSinId } = categoria.toObject();
      categoriaSinId.id = _id;
      return categoriaSinId;
    });
    res.status(200).json({
      ok: true,
      data: categoriasLimpio,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

categoriaController.getCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtenerCategoria(id);

    if (categoria === null) {
      res.status(200).json({
        ok: false,
        data: "No se encontró la categoria",
      });
    } else {
      const { _id, __v, ...categoriaSinId } = categoria.toObject();
      categoriaSinId.id = _id;

      res.status(200).json({
        ok: true,
        data: categoriaSinId,
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

categoriaController.putCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const categoriaActualizada = await actualizarCategoria(id, body);
    if (categoriaActualizada === null)
      res.status(200).json({
        ok: false,
        data: "No se encontró la categoria",
      });
    else {
      const { _id, __v, ...categoriaSinId } = categoriaActualizada.toObject();
      categoriaSinId.id = _id;

      res.status(200).json({
        ok: true,
        data: categoriaSinId,
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

categoriaController.deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoriaEliminada = await eliminarCategoria(id);
    if (categoriaEliminada === null)
      res.status(200).json({
        ok: false,
        data: "No se encontró la categoria",
      });
    else
      res.status(200).json({
        ok: true,
        data: categoriaEliminada,
      });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};
export default categoriaController;
