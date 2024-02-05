const express = require('express');
const UserManager = require("./UserManager.js");

const app = express();
const port = 3000; 

const userManager = new UserManager("./files/usuarios.json");

    // obtener todos los usuarios
app.get('/users', async (req, res) => {
    try {
        const users = await userManager.getUsers();
        res.json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

   //obtener un usuario por su ID
app.get('/users/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await userManager.getUserById(userId);
        if (user) {
            res.json({ user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
