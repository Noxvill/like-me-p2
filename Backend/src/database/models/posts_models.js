const database = require("../dbConfig")


// Agregar post
const agregarPost = async (titulo, img, descripcion, likes) => {

    try {
        
        console.log('/add')
        const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4 ) RETURNING *"
        const VALUES = [titulo, img, descripcion, likes]
        
        const result = await database.query(consulta, VALUES)
        console.log("post agregado", result)
        
        if(result.rowCount){

        return ({
        
        msg:'Post registrado con éxito',
        data: result.rows[0]
        
        
        })

    }else{

        msg:'El Post no pudo ser registrado :C'
        data:[]


    }


    } catch (error) {
        throw error
    }


}

// Consultar posts

// const obtenerPosts = async () => {
 

// try {
    
//     const consulta="SELECT * FROM posts"
//     const { rows } = await database.query(consulta)
//     console.log(rows)
//     if (rows.length) {
//         msg:'Posts encontrados'
//         data:[rows]
//     } else {

//         msg:'El Post no pudo ser encontrado ksjdksjd :C'
//         data:[]
        
//     }
  


// } catch (error) {
    
// }


//     }
    

const obtenerPosts = async () => {
    try {
        const consulta = "SELECT * FROM posts";
        const { rows } = await database.query(consulta);
        console.log(rows);
        if (rows.length) {
            return {
                msg: 'Posts encontrados',
                data: rows
            };
        } else {
            return {
                msg: 'No se encontraron posts',
                data: []
            };
        }
    } catch (error) {
        throw error;
    }
};

const postCollection = {

    agregarPost,
    obtenerPosts

}

module.exports = {postCollection}