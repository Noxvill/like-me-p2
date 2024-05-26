const { response } = require('express')
const {postCollection} = require('../../database/models/posts_models')

// Comtrolador para agregar posts
// const addPostController = async(req, res, next)=>{

//     try {
//       const {titulo, img, descripcion, likes} = req.body
//       const response = await postCollection.agregarPost(titulo, img, descripcion, likes)
//       res.send(response)

//       console.log('Controlador nuevo de agrgear')
        
//     } catch (error) {
//         next(error)
//     }
// }

const addPostController = async (req, res, next) => {
  try {
    const { titulo, url, descripcion } = req.body; // me aseguro de usar 'url' en lugar de 'img'
    const likes = 0; // inicializaré like en 0 para que no quede vacío desde el front
    const response = await postCollection.agregarPost(titulo, url, descripcion, likes);
    res.send(response);
    console.log('Controlador nuevo de agregar');
  } catch (error) {
    next(error);
  }
};



// controlador para consultar posts

// const getPostController = async(req, res, next)=>{
//   const getPostController = async(req, res, next)=>{
//   try {
//     const response = await postCollection.obtenerPosts()
//     res.send(response)
//     console.log('Controlador nuevo de consultar')
      
//   } catch (error) {
      
//   throw error
//   }
// }

const getPostController = async (req, res, next) => {
  try {
      const response = await postCollection.obtenerPosts();
      res.send(response);
      console.log('Controlador nuevo de consultar');
  } catch (error) {
      next(error);
  }
};


module.exports={

addPostController,
getPostController

}