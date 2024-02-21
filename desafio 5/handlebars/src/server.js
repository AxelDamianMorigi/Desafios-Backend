const express = require('express');
const { engine } = require('express-handlebars');
const http = require('http');
const socketIo = require('socket.io');
const Contenedor = require('./contenedor');

const contenedor = new Contenedor("productos.json");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));

app.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();
    res.render('pages/list', { productos });
});

app.get('/', (req, res) => {
    res.render('pages/form', {});
});

app.get('/realtimeproducts', (req, res) => {
    res.render('pages/realTimeProducts');
});

io.on('connection', (socket) => {
    contenedor.on('change', async () => {
        const productos = await contenedor.getAll();
        io.emit('productosActualizados', productos);
    });

    socket.on('disconnect', () => {});
});

contenedor.on('change', async () => {
    const productos = await contenedor.getAll();
    io.emit('productosActualizados', productos);
});

const PORT = 8080;
server.listen(PORT, () => {});
