import { Button, Card, TextInput, Title } from "@tremor/react"; // Importa los componentes necesarios
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoriaService from "../../services/categoria.service";
export const CategoriaForm = () => {
  const { id } = useParams();
  const [tipoAccion, setTipoAccion] = useState("Crear"); // Define el tipo de acción [Crear, Editar
  const [categoria, setCategoria] = useState({
    nombre: "",
    descripcion: "",
  }); // Define el estado inicial de la categoría
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCategoria({
      ...categoria,
      [event.target.name]: event.target.value,
    });
  }; // Actualiza el estado de la categoría

  useEffect(() => {
    if (id) {
      setTipoAccion("Editar");
      categoriaService
        .get(id)
        .then((response) => {
          console.log(response);
          setCategoria(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]); // Llama al servicio de categoría por id

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tipoAccion === "Crear") {
      categoriaService
        .create({
          nombre: categoria.nombre,
          descripcion: categoria.descripcion,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/categorias");
    } else {
      categoriaService
        .update(id, {
          nombre: categoria.nombre,
          descripcion: categoria.descripcion,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/categorias");
    }
  };
  return (
    <div>
      <Card>
        <Title className="text-center text-3xl">Crear Nueva Categoría</Title>
        <form
          className="mt-5 space-y-4 w-2/5 mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-medium">Nombre:</label>
            <TextInput
              data-cy="nombre-categoria"
              type="text"
              placeholder="Ingrese el nombre de la categoría"
              className="w-full"
              name="nombre"
              value={categoria.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium">Descripción:</label>
            <TextInput
              data-cy="descripcion-categoria"
              placeholder="Ingrese la descripción de la categoría"
              className="w-full"
              name="descripcion"
              value={categoria.descripcion}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              data-cy="data-cy=boton-actualizar"
            >
              {tipoAccion === "Crear" ? "Crear Categoría" : "Editar Categoría"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
