import { Badge, Card, Col, Grid } from "@tremor/react";
import { Link } from "react-router-dom";
import { usePelicula } from "../hooks/usePelicula";
const PeliculasPage = () => {
  const { peliculas, handleDelete } = usePelicula();


  return (
    <div className="p-4 mx-32 mt-6">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Cartelera de Películas
      </h1>
      <Grid gap={8} className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {peliculas.length > 0 &&
          peliculas.map(pelicula => (
            <Col key={pelicula.id} className="mb-4">
              <Card className="border-none">
                <img
                  src={pelicula.imagenURL} // Añade la URL de la imagen de la película
                  alt={pelicula.titulo}
                  className="w-full h-auto"
                />
                <div className="p-2">
                  <h2 className="text-lg font-semibold mb-2">
                    {pelicula.titulo}
                  </h2>
                  <p className="mb-2">{pelicula.anio}</p>
                  <div className="mb-2">
                    <Badge>{pelicula.categoria}</Badge>
                  </div>
                  <Link
                    to={`/peliculas/${pelicula.id}`}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
      </Grid>
    </div>
  );
};

export default PeliculasPage;
