const express = require('express');
const Contenedor = require('./src/contenedor');
const contenedorProductos = new Contenedor("productos.json");
const contenedorCarritos = new Contenedor("carrito.json");
const app = express();

app.use(express.json());

const productosRouter = express.Router();
const carritosRouter = express.Router();

app.use('/api/products', productosRouter);
app.use('/api/carts', carritosRouter);

productosRouter.get('/', async (req, res) => {
    const products = await contenedorProductos.getAll();
    res.status(200).json(products);
});

productosRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await contenedorProductos.getById(id);

    product
        ? res.status(200).json(product)
        : res.status(404).json({ error: "Producto no encontrado" });
});

productosRouter.post('/', async (req, res) => {
    const { body } = req;
    const newProductId = await contenedorProductos.save(body);
    res.status(200).send(`Producto agregado con el ID: ${newProductId}`);
});

productosRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await contenedorProductos.updateById(id, body);
    wasUpdated
        ? res.status(200).send(`El producto de ID: ${id} fue actualizado`)
        : res.status(404).send(`El producto no fue actualizado porque no se encontró el ID: ${id}`);
});

productosRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const wasDeleted = await contenedorProductos.deleteById(id);
    wasDeleted
        ? res.status(200).send(`El producto de ID: ${id} fue borrado`)
        : res.status(404).send(`El producto no fue borrado porque no se encontró el ID: ${id}`);
});

carritosRouter.post('/', async (req, res) => {
    const { body } = req;
    const newCartId = await contenedorCarritos.save(body);
    res.status(200).send(`Carrito creado con el ID: ${newCartId}`);
});

carritosRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const cart = await contenedorCarritos.getById(id);
    cart
        ? res.status(200).json(cart)
        : res.status(404).json({ error: "Carrito no encontrado" });
});

carritosRouter.post('/:cid/product/:pid', async (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

 
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(` >>>>> 🚀 Server started at http://localhost:${PORT}`)
});

server.on('error', (err) => console.log(err));
