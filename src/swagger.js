const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const {DB_HOST, S_PORT} = require('./config.js') 

const app = express();

// Definiciones básicas de Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Hardware Products API',
    version: '1.0.0',
    description: 'Documentation of Hardware Products API'
  },
  servers: [
    {
      url: `http://${DB_HOST}:${S_PORT}`,
      description: 'Production Server'
    }
  ],
};

// Opciones para swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Archivos con anotaciones Swagger
};

// Inicializar swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Configurar rutas de Swagger
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
