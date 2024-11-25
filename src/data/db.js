const { Sequelize } = require("sequelize")
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DIALECT } = require('../config.js')

/* nombre de la db- user - contraseña - {donde esta alojada, lenguaje, puerto} */
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DIALECT,
    port: DB_PORT
})

module.exports = db