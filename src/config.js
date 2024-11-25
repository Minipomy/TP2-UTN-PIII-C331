const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')

const envPath = path.resolve('../', '.env');

if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    console.warn('.env file not found. Loading default configurations.');
}

module.exports = {
    DIALECT: process.env.DB_DIALECT || 'mysql', 
    DB_NAME: process.env.DB_NAME || 'hardware_store',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '3306',
    S_PORT: process.env.S_PORT || '3000'
  }