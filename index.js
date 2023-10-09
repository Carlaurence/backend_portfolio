const express = require('express')
const dbConnection = require('./config/db')
const cors = require('cors')
const { appConfig } = require('./config')
dbConnection();
const app = express();
const morgan = require('morgan')//npm i morgan
app.use(morgan('dev'))//MUESTRA EN CONSOLA CADA QUE SE EJECUTE UN MICROSERVICIO

//IMPORT ROUTES AS A MIDDLEWARE
const messageRoutes = require('./routes/message_routes')

//Middleware
app.use(cors());
app.use(express.json({extended:true}));

//CREACION DE LAS RUTAS PRIMARIAS DE ENLACE A LA BBDD + MIDDLEWARE
app.use('/api/message', messageRoutes);


//TEST CONNECTION TO DATABASE
app.get('/', (req, res) => res.send('You Are connected to Mongo Database of MyPortafolioMessages'))

const port = process.env.PORT || appConfig.port

console.log(`http//${appConfig.host}:${appConfig.port}`)
app.listen(port, () => {
    console.log("port running in: "+port);
});
