const { DataTypes } = require('sequelize');
const db = require('../data/db.js'); // Asegúrate de que la conexión de Sequelize está en un archivo llamado db.js
const categoryModel = require('./categoryModel.js');

const productModel = db.define('products', {
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
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: categoryModel.id,
            key: 'id'
        }
    }
}, {
    tableName: 'products'
});

productModel.belongsTo(categoryModel, { foreignKey: 'categoryId' });

module.exports = productModel;
