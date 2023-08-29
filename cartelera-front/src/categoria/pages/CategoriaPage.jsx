import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoriaService from "../../services/categoria.service";

export const CategoriaPage = () => {
  const [categorias, setCategorias] = useState([]);
  const getCategorias = () => {
    categoriaService
      .getAll()
      .then((response) => {
        setCategorias(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    categoriaService
      .delete(id)
      .then((response) => {
        console.log(response);
        getCategorias();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <div>
      <Card>
        <Title className="text-center text-3xl">Lista de Categorías</Title>
        <Table className="mt-5 w-2/3 mx-auto">
          <TableHead className="text-center">
            <TableRow>
              <TableHeaderCell className="text-center">ID</TableHeaderCell>
              <TableHeaderCell className="text-center">NOMBRE</TableHeaderCell>
              <TableHeaderCell className="text-center">
                DESCRIPCION
              </TableHeaderCell>
              <TableHeaderCell className="text-center">
                ACCIONES
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.length > 0 &&
              categorias.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center">{item.id}</TableCell>
                  <TableCell>
                    <p
                      className="text-center"
                      id="td-nombre-categoria"
                    >
                      {item.nombre}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p
                      data-cy="td-descripcion-categoria"
                      id="td-descripcion-categoria"
                    >
                      {item.descripcion}
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-3">
                    <Link
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded btn-editar"
                      to={`/categorias/${item.id}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
