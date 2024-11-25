const { DataTypes } = require('sequelize');
const db = require('../data/db.js'); // Asegúrate de que la conexión de Sequelize está en un archivo llamado db.js

const categoryModel = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'categories'
});

module.exports = categoryModel;
