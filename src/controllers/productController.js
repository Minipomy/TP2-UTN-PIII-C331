const productModel = require('../models/productModel.js');
const categoryModel = require('../models/categoryModel.js');

const createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const { categoryId, status } = req.query;
        const whereClause = {};
        if (categoryId) whereClause.categoryId = categoryId;
        if (status) whereClause.status = status;

        const products = await productModel.findAll({
            where: whereClause,
            include: categoryModel
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productModel.findByPk(req.params.id, {
            include: categoryModel
        });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const [updated] = await productModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedProduct = await productModel.findByPk(req.params.id, {
                include: categoryModel
            });
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deleted = await productModel.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
