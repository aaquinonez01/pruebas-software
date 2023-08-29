import { Button, Card } from "@tremor/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { peliculaService } from "../../services/pelicula.service";

export const PeliculaDetailPage = () => {
  const [pelicula, setPelicula] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    peliculaService
      .delete(id)
      .then((response) => {
        console.log(response);
        navigate("/peliculas");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getPeliculaById = async () => {
    // Llamar al servicio de pelicula por id
    const response = await peliculaService.get(id);
    setPelicula(response.data);
  };

  useEffect(() => {
    if (id) {
      getPeliculaById();
    }
  }, [id]);

  return (
    <Card className="max-w-4xl mx-auto mt-3">
      <div className="flex space-x-4 p-4">
        <div className="w-1/3">
          <img
            src={pelicula.imagenURL}
            alt={pelicula.titulo}
            className="w-full h-auto"
          />
        </div>
        <div className="w-2/3">
          <p
            className="text-3xl font-bold text-titulo"
            data-testid="titulo-pelicula"
          >
            {pelicula.titulo}
          </p>
          <p
            className="text-gray-600 font-bold text-anio"
            data-testid="anio-pelicula"
          >
            Año: {pelicula.anio}
          </p>
          <p
            className="text-gray-600 font-bold text-categoria"
            data-testid="categoria-pelicula"
          >
            Categoría: {pelicula.categoria}
          </p>
          <p
            className="text-gray-600 text-descripcion"
            data-testid="descripcion-pelicula"
          >
            Descripción: {pelicula.descripcion}
          </p>
          {/* Agrega más información de la película según tu modelo de datos */}
          <Button
            variant="primary"
            className="bg-red-500 hover:bg-red-600 rounded-lg mt-4"
            onClick={() => handleDelete(pelicula.id)}
          >
            Eliminar Pelicula
          </Button>
        </div>
      </div>
    </Card>
  );
};
