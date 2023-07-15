import {promises as fs} from "fs"


class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []

    }

    static id = 0

    addProduct = async (title, description, price, imagen, code, stock) => {

        ProductManager.id++

        let newProduct = {
            title,
            description,
            price, 
            imagen,
            code,
            stock,
            id: ProductManager.id
        }
        
        this.products.push(newProduct)


        await fs.writeFile(this.patch, JSON.stringify(this.products))


    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
         return respuesta2
    }

    getProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        if(!respuesta3.find(product => product.id === id)){
            "Producto no encontrado"
        } else {
            respuesta3.find(product => product.id === id)
        }



        
    }






}
const productos = new ProductManager

/*productos.addProduct("Titulo1", "Description1", 1000, "Imagen1", "abc123", 5)
productos.addProduct("Titulo5", "Description5", 5000, "Imagen5", "abc130", 10)
productos.addProduct("Titulo10", "Description10", 10000, "Imagen10", "abc136", 15)*/

productos.getProductsById(4)
