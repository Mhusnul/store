import api from "./api";

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getDetailProducts = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
