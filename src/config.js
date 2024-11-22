const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve('../', '.env')
})

module.exports = {
    DIALECT: process.env.DB_DIALECT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    S_PORT: process.env.S_PORT
  }