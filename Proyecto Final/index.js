let opcion = prompt("Bienvenido a la pagina escriba si para llevarse Creatina, proteina y aminoacidos con un descuento del 10% de otra manera escriba no")

if ( opcion == "si" ) {

    alert("Muchas gracias")
    
} else {

    window.close()
    
}

let productos = []

function Producto(nombre, precio , categoria) {

    this.nombre = nombre,
    this.precio = precio,
    this.categoria = categoria
    
};

productos.push(new Producto("Creatina", 3000 , "Natural"))
productos.push(new Producto("Proteina", 4000 , "Natural"))
productos.push(new Producto("Aminoacidos", 4500 , "Natural"))

function mostrarProductos() {

    for (let i = 0; i < productos.length ; i++) {

        document.write(productos[i]["nombre"] + " " + " = " + productos[i].precio + " y es " + productos[i].categoria + "<br>" )
        
    }
    
};

mostrarProductos();

let sumarPrecioProductos = function () {

    let acum = 0; 

    for (let i = 0; i < productos.length ;  i++) {

        //acum = acum + productos[i]["precio"]
        acum += productos[i]["precio"]  

    }

    return descuento(acum)
    
};

let descuento = (acum) => {

    let precioFinal = acum * 0.9

    return precioFinal
    
};

document.write( "su precio final es de = $" + sumarPrecioProductos(productos) ) 


// let suma = (num1, num2) => {

//     return num1 + num2;
   
// };

// document.write(`${suma()} <br>`)


// let eleccion = setTimeout( () => prompt("Hola escriba que productos de la lista desea comprar"),1000)

