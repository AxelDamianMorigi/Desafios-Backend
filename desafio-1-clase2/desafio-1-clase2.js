class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
   
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  
  
      if (this.products.some(product => product.code === code)) {
        console.log("Ya existe un producto con ese código");
        return;
      }
  
   
      const newProduct = {
        id: this.nextId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado");
      }
    }
  }
  

  const manager = new ProductManager();
  
  manager.addProduct("Televisor", "Samsung 50 pulgadas 120Hz", 599.99, "tv.jpg", "TV001", 20);
  manager.addProduct("Aire Acondicionado", "Aire acondicionado 3000 frigorías", 399.99, "ac.jpg", "AC001", 15);
  manager.addProduct("Computadora", "Laptop con procesador i7 de 11va generación", 899.99, "laptop.jpg", "COMP001", 10);
  
  console.log("Lista de productos:", manager.getProducts());
  
  const productIdToSearch = 1;
  const productFound = manager.getProductById(productIdToSearch);
  
  if (productFound) {
    console.log("Producto encontrado:", productFound);
  }