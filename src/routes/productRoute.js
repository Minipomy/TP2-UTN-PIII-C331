/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product Management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Product ID
 *                   name:
 *                     type: string
 *                     description: Product name
 *                   status:
 *                     type: string
 *                     description: Product status
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: Product price
 *                   categoryId:
 *                     type: integer
 *                     description: Category ID
 */

const express = require('express');
const { 
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController.js');

const router = express.Router();

router.post('/', createProduct);
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name
 *               status:
 *                 type: string
 *                 description: Product status
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Product price
 *               categoryId:
 *                 type: integer
 *                 description: Category ID
 *     responses:
 *       201:
 *         description: Product created successfully
 */

router.get('/', getProducts);

router.get('/:id', getProductById);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Product ID
 *                 name:
 *                   type: string
 *                   description: Product name
 *                 status:
 *                   type: string
 *                   description: Product status
 *                 price:
 *                   type: number
 *                   format: float
 *                   description: Product price
 *                 categoryId:
 *                   type: integer
 *                   description: Category ID
 *       404:
 *         description: Product not found
 */

router.put('/:id', updateProduct);
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name
 *               status:
 *                 type: string
 *                 description: Product status
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Product price
 *               categoryId:
 *                 type: integer
 *                 description: Category ID
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */

router.delete('/:id', deleteProduct);
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */

module.exports = router;
