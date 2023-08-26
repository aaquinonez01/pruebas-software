import { Button, Card, Text, TextInput, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import categoriaService from "../../services/categoria.service";
import { peliculaService } from "../../services/pelicula.service";

const PeliculaForm = () => {
  const { titulo, imagenURL, anio, descripcion, categoria, onInputChange, imagenBase64 } = useForm({
    titulo: "",
    imagenURL: "",
    anio: "",
    descripcion: "",
    categoria: "",
    imagenBase64: ""
  })

  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

  const getCategorias = () => {
    categoriaService
      .getAll()
      .then(response => {
        setCategorias(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    peliculaService
      .create({
        titulo,
        anio,
        categoria,
        descripcion,
        imagenURL: imagenBase64,
      })
      .then(response => {
        console.log(response);
        navigate("/peliculas");
      })
      .catch(error => {
        console.log(error);
      });
    // Limpia los campos después de envia
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-3/4 p-4 flex">
        <div className="w-1/2 mr-4">
          <Title className="text-center text-3xl font-bold">
            Agregar Nueva Película
          </Title>
          <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
            <Text>Título:</Text>
            <TextInput
              type="text"
              label="Título"
              value={titulo}
              onChange={onInputChange}
              name="titulo"
              required
            />
            <div className="flex gap-4 w-full">
              <div>
                <Text>Año de Estreno:</Text>
                <TextInput
                  type="number"
                  label="Año de Estreno"
                  value={anio}
                  onChange={onInputChange}
                  name="anio"
                  required
                />
              </div>
              <div className="w-full">
                <Text>Categoría:</Text>
                <select
                  label="Categoría"
                  value={categoria}
                  onChange={onInputChange}
                  name="categoria"
                  required
                  className="
                    w-full border border-gray-300 rounded px-3 py-2
                  "
                >
                  <option value="">Seleccione una categoría</option>
                  {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  ))}

                  {/* Agrega más opciones de categorías aquí */}
                </select>
              </div>
            </div>
            <Text className="relative">Descripción:</Text>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 h-32"
              label="Descripción"
              value={descripcion}
              onChange={onInputChange}
              name="descripcion"
              required
            ></textarea>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Agregar Película
            </Button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center ">
          <Card className="p-4 w-72 h-96 mx-auto">
            <img
              src={imagenURL}
              className="w-full h-full object-cover"
            />
          </Card>
          <TextInput
            className="w-1/2 mx-auto mt-4"
            type="file"
            label="Imagen"
            accept="image/*"
            name="imagenURL"
            onChange={onInputChange}
            required
          />
        </div>
      </Card>
    </div>
  );
};

export default PeliculaForm;
