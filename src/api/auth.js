import api from "./api";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", res.data.access_token);
  localStorage.setItem("refreshToken", res.data.refresh_token);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  delete api.defaults.headers.common["Authorization"];
};
