require('dotenv').config()

const {Pool} = require('pg')

const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD); // Debería imprimir 1234
// console.log('DB_HOST:', process.env.DB_HOST); // Debería imprimir 1234
// console.log('DB_USER:', process.env.DB_USER); // Debería imprimir 1234
// console.log('DB_NAME:', process.env.DB_NAME); // Debería imprimir 1234

const database = new Pool ({

    host: DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME,
    allowExitOnIdle: true

    // host:'localhost',
    // user: 'postgres',
    // password:'1234',
    // database:'likeme',
    // allowExitOnIdle: true

})

// const getDate = async ()=>{

// const result = await database.query("SELECT NOW()")
// console.log(result) 

// }

// getDate()

module.exports = database;