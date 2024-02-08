const express = require('express');
const ProductManager = require("./ProductManager.js");

const app = express();
const port = 3000;

const productManager = new ProductManager("./files/productos.json");

app.get('/products', async (req, res) => {
    try {
        let limit = req.query.limit ? parseInt(req.query.limit) : null;
        const products = await productManager.getProducts(limit);
        res.json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await productManager.getProductById(productId);
        if (product) {
            res.json({ product });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
