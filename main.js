class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(titulo, descripcion, precio, imagen, code, stock){
        for(let i = 0; i < this.products.length;i++){
            if (this.products[i].code === code) { 
                console.log(`El código ${code} está repetido`);
                break;
            }
        }



        ProductManager.id++
        this.products.push({
             titulo,
             descripcion,
             precio,
             imagen,
             code,
             stock,
             id:ProductManager.id
              
            });
    }

    getProduct(){
        return this.products;
    }

    existe(id){
        return this.products.find ((producto) => producto.id === id )

    }

    getProductById(id){
        !this.existe(id) ? console.log("no encontrado") : console.log(this.existe(id));
        
    }
}

const productos = new ProductManager();

console.log (productos.getProduct())

productos.addProduct("titulo1", "descripcion1", 1000, "imagen1", "abc123", 5);
productos.addProduct("titulo2", "descripcion2", 1000, "imagen2", "abc125", 7);


console.log (productos.getProduct())

productos.addProduct("titulo3", "descripcion3", 1000, "imagen3", "abc127", 9);

//productos.getProductById(2)