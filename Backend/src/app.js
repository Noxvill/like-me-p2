const express = require ('express')
const routes = require('./routes/index')
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const { handlerErrors } = require('./middlewares/errorHandler');
// Middlewares

app.use(express.json())
app.use(morgan('dev'))
app.use(cors( {
origin:'*'
}))

// Rutas

app.use('/api', routes)
app.use(handlerErrors)
module.exports= app;