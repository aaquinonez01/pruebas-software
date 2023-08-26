import instance from "./config";

const categoriaService = {};

categoriaService.getAll = async () => {
  const { data } = await instance.get("/categoria");
  return data.data;
};

categoriaService.get = async id => {
  const { data } = await instance.get(`/categoria/${id}`);
  return data.data;
};

categoriaService.create = async data => {
  const response = await instance.post("/categoria", data);
  return response.data;
};

categoriaService.update = async (id, data) => {
  const response = await instance.put(`/categoria/${id}`, data);
  return response.data;
};

categoriaService.delete = async id => {
  const response = await instance.delete(`/categoria/${id}`);
  return response.data;
};

export default categoriaService;
