
import axios from "axios";
// Reemplazar por la URL de la API
const API_URL = "http://localhost:3000/api/posts";



export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/getPosts`);
  return response.data.data; // Accede a la propiedad data que contiene los posts
};
export const addPost = async (post) => {
  const response = await axios.post(`${API_URL}/add`, post);
  return response.data; // Asegúrate de que response.data contiene el nuevo post
};

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/delete/${id}`);
};

// export const likePost = async (id) => {
//   await axios.put(`${API_URL}/put/${id}`);
// };
export const likePost = async (id, likes) => {
  const response = await axios.put(`${API_URL}/put/${id}?likes=${likes}`);
  return response.data;
};

