import { successToast, errorToast } from "./utils/toast";
import { useEffect, useState } from "react";

import {
  getPosts,
  addPost,
  deletePost,
  likePost,
} from "./services/postService";

import AddPost from "./components/AddPost";
import CardPost from "./components/CardPost";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        // Asegúrate de que `data` es un arreglo
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Error: La respuesta no es un arreglo", data);
          errorToast("Error al obtener los posts");
        }
      })
      .catch((err) => {
        console.error(err);
        errorToast("Error al obtener los posts");
      });
  }, []);

  const createPost = (post) => {
    addPost(post)
      .then((data) => {
        setPosts([...posts, data]);
        successToast("Post creado correctamente");
      })
      .catch((err) => {
        console.error(err);
        errorToast("Error al crear el post");
      });
  };

  const deletePostById = (id) => {
    deletePost(id)
      .then(() => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
        successToast("Post eliminado correctamente");
      })
      .catch((err) => {
        console.error(err);
        errorToast("Error al eliminar el post");
      });
  };

  const likePostById = (id) => {
    // Encontrar el post actual y su número de likes
    const post = posts.find((p) => p.id === id);
    if (!post) {
      errorToast("Post no encontrado");
      return;
    }
  
    // Incrementar los likes del post actual
    const updatedLikes = post.likes + 1;
  
    likePost(id, updatedLikes)
      .then(() => {
        const newPosts = posts.map((post) => {
          if (post.id === id) {
            return {
              ...post,
              likes: updatedLikes, // Incrementar likes en el frontend
            };
          }
          return post;
        });
        setPosts(newPosts);
      })
      .catch((err) => {
        console.error(err);
        errorToast("Error al dar like al post");
      });
  };
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">📷 Like Me 📷</h1>
      <main className="row">
        <section className="col-12 col-md-4 mt-5">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h2>Add Post</h2>
              <AddPost createPost={createPost} />
            </div>
          </div>
        </section>
        <section className="col-12 col-md-4 mt-5">
          {posts.map((post) => (
            <CardPost
              key={post.id}
              post={post}
              deletePostById={deletePostById}
              likePostById={likePostById}
            />
          ))}
          {posts.length === 0 && (
            <div className="card">
              <div className="card-body">
                <h2>No hay posts</h2>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
