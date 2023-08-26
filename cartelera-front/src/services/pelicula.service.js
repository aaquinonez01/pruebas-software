import instance from "./config";

export const peliculaService = {};

peliculaService.getAll = async () => {
  const { data } = await instance.get("/pelicula");
  console.log(data);
  return data.data;
};

peliculaService.get = async id => {
  const { data } = await instance.get(`/pelicula/${id}`);
  return data;
};

peliculaService.create = async data => {
  console.log(data);
  const response = await instance.post("/pelicula", { ...data });
  return response.data;
};

peliculaService.update = async (id, data) => {
  const response = await instance.put(`/pelicula/${id}`, data);
  return response.data;
};

peliculaService.delete = async id => {
  const response = await instance.delete(`/pelicula/${id}`);
  return response.data;
};
