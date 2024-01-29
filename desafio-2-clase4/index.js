/**
 * Hands on Lab:
 * Manager de Usuarios
 * FS con Promises
 */

const UserManager = require("./UserManager.js");

let userManager = new UserManager("./files/usuarios.json");

let persistUser = async () => {
    await userManager.createUser("Carolina", "Di Bacco", 22, "Frontend");
    let users = await userManager.getUsers();
    console.log(`Usuarios encontrados en User Manager: ${users.length}`);
    console.log(users);
};

persistUser();
