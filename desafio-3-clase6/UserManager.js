const fs = require('fs').promises;

class UserManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async createUser(nombre, apellido, edad, curso) {
        const newUser = {
            nombre,
            apellido,
            edad,
            curso
        };

        try {
            const users = await this.getUsers();
            users.push(newUser);
            await this.saveUsers(users);
            console.log("Usuario creado:", newUser);
        } catch (error) {
            console.error("Error al crear el usuario:", error.message);
            throw error;
        }
    }

    async getUsers() {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
           
            return [];
        }
    }

    async getUserById(id) {
        try {
            const users = await this.getUsers();
            const user = users.find(u => u.id === id);

            if (user) {
                return user;
            } else {
                return null; 
            }
        } catch (error) {
            console.error("Error al obtener el usuario por ID:", error.message);
            throw error;
        }
    }

    async updateUser(id, updatedFields) {
        try {
            const users = await this.getUsers();
            const index = users.findIndex(u => u.id === id);

            if (index !== -1) {
               
                updatedFields.id = id;
                users[index] = updatedFields;
                await this.saveUsers(users);
                console.log("Usuario actualizado:", updatedFields);
            } else {
                throw new Error("Usuario no encontrado, no se puede actualizar");
            }
        } catch (error) {
            console.error("Error al actualizar el usuario:", error.message);
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const users = await this.getUsers();
            const updatedUsers = users.filter(u => u.id !== id);

            if (updatedUsers.length < users.length) {
                await this.saveUsers(updatedUsers);
                console.log("Usuario eliminado con éxito");
            } else {
                throw new Error("Usuario no encontrado, no se puede eliminar");
            }
        } catch (error) {
            console.error("Error al eliminar el usuario:", error.message);
            throw error;
        }
    }

    generateUniqueId(users) {
        
        const lastId = users.reduce((maxId, user) => (user.id > maxId ? user.id : maxId), 0);
        return lastId + 1;
    }

    async saveUsers(users) {
        await fs.writeFile(this.filePath, JSON.stringify(users, null, 2), 'utf-8');
    }
}

module.exports = UserManager;
