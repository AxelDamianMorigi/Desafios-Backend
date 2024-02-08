const fs = require('fs').promises;

class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getProducts(limit) {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            let products = JSON.parse(data);
            if (limit) {
                products = products.slice(0, limit);
            }
            return products;
        } catch (error) {
            console.error("Error al obtener los productos:", error.message);
            throw error;
        }
    }

    async getProductById(id) {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            const products = JSON.parse(data);
            const product = products.find(p => p.id === id);

            if (product) {
                return product;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error al obtener el producto por ID:", error.message);
            throw error;
        }
    }
}

module.exports = ProductManager;
