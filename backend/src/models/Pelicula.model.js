import mongoose, { Schema } from "mongoose";

const peliculaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  anio: {
    type: String,
    required: true,
    min: 0,
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
  imagenURL: {
    type: String,
    required: true,
    min: 0,
  },
});

peliculaSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Pelicula = mongoose.model("Pelicula", peliculaSchema);

export default Pelicula;
