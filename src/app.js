const express = require('express');
const db = require('./data/db.js')
const cors = require('cors');
const path = require('path')
const swaggerApp = require('./swagger.js');



const { S_PORT, DB_HOST } = require('./config.js')

const categoryRouter = require('./routes/categoryRoute.js')
const productRouter = require('./routes/productRoute.js')


const app = express();
app.use(express.json())
app.use(cors())

app.use('/categories', categoryRouter)
app.use('/products', productRouter)
app.use(swaggerApp);

const databaseManager = async () => {
    try {
        db.authenticate()
        console.log(`[ OK ] - Connetion stablished to dabatase`);
    } catch (error) {
        console.log(`[ FAIL ] - There was an error while trying to make connetion with the database ${error}`);
    }
}

app.listen(S_PORT, () => {
    databaseManager()
    console.log(`Running correctly on : 
        ---> http://${DB_HOST}:${S_PORT} <---`);
})

