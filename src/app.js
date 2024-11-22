const express = require('express');
const path = require('path');
const database = require('./data/db.js')
const {S_PORT} = require('./config.js')


const app = express();

app.get ("/",(req,res)=>{
    res.send ("Welcome")
})

const cursorDB = async () => {
    try {
        database.authenticate()
        console.log(`[ OK ] - Connetion stablished to dabatase`);
    } catch (error) {
        console.log(`[ FAIL ] - There was an error while trying to make connetion with the database ${error}`);
    }
}


app.listen(S_PORT, () => {
    cursorDB()
    console.log(`Running correctly on port: ${S_PORT}`);
})