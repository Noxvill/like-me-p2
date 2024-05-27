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


    const modificarPosts = async (id, likes) => {

        try {
            const consulta = "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *"
        const values = [likes, id]
        const result = await database.query(consulta, values)

if (result.rowCount) {
    
            return {
            msg: 'Post modificado',
            data: result.rows[0]
        };
    } else {
        return {
            msg: 'No se pudo modificar post',
            data: []
        }}


        } catch (error) {
            const err = new Error('Error en la consulta')
            err.msg='badrequest'
            err.status='400'
            err.origin='database'
            err.deails=error

            throw err;
        }}
        

        const eliminarPosts = async (id) => {

            try {
                const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *"
            const values = [id]
            const result = await database.query(consulta, values)
    
    if (result.rowCount) {
        
                return {
                msg: 'Post eliminado',
                data: result.rows[0]
            };
        } else {
            return {
                msg: 'No se pudo eliminar post',
                data: []
            }}
    
    
            } catch (error) {
                const err = new Error('Error en la consulta')
                err.msg='badrequest'
                err.status='400'
                err.origin='Posts'
                err.deails=error
    
                throw err;
            }}
const postCollection = {

    agregarPost,
    obtenerPosts,
    modificarPosts,
    eliminarPosts

}

module.exports = {postCollection}