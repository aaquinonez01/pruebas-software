import mongoose, { Schema } from "mongoose";

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  peliculas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pelicula",
    },
  ],
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;
