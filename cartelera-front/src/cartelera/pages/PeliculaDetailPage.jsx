import { Button, Card, Text } from "@tremor/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { peliculaService } from "../../services/pelicula.service";

export const PeliculaDetailPage = () => {
  const [pelicula, setPelicula] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = id => {
    peliculaService
      .delete(id)
      .then(response => {
        console.log(response);
        navigate("/peliculas");
      })
      .catch(error => {
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
  }, [id, getPeliculaById]);

  return (
        <Card className="max-w-4xl mx-auto mt-3">
          <div className="flex space-x-4 p-4">
            <div className="w-1/3">
              <img src={pelicula.imagenURL} alt={pelicula.titulo} className="w-full h-auto" />
            </div>
            <div className="w-2/3">
              <Text variant="h2" className="text-3xl font-bold">{pelicula.titulo}</Text>
              <Text variant="body" className="text-gray-600 font-semibold">Año: {pelicula.anio}</Text>
              <Text variant="body" className="text-gray-600">Descripción: {pelicula.descripcion} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tempore totam magnam recusandae atque nesciunt dicta, doloremque consequatur mollitia ipsum iure aliquam, at soluta laborum cupiditate vero, animi perspiciatis. Hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate at dolore nostrum cumque magni laboriosam, itaque perferendis. Harum ad aspernatur nisi vero repellendus adipisci, suscipit veniam esse odio quisquam!</Text>
              {/* Agrega más información de la película según tu modelo de datos */}
              <Button variant="primary" className="bg-red-500 hover:bg-red-600 rounded-lg mt-4" onClick={()=>handleDelete(pelicula.id)
              }>Eliminar Pelicula</Button>
            </div>
          </div>
        </Card>
  );
};
