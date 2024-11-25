const categoryModel = require('../models/categoryModel.js');

const createCategory = async (req, res) => {
    try {
        const category = await categoryModel.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryModel.findByPk(req.params.id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const [updated] = await categoryModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCategory = await categoryModel.findByPk(req.params.id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const deleted = await categoryModel.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
