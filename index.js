// const Pi = 3.14
// console.log(Pi)

// let Nombre = "Exequiel"
// const Espacio = " "
// let Apellido = "Guardia"
// let Res = Nombre + Espacio + Apellido
// console.log(Res)

// let Marca = "Renault 12" 
// let Precio = 5000
// console.log(`El nuevo ${Marca} sale con un precio de ${Precio} euros`)

// let numA = 10
// let numB = 58
// const numC = -5
// let res = numA / numB + numC
// console.log(`el resultado da ${res}`)

/*let pregunta = prompt("¿Usted es mayor de 21 para usar la aplicacion?")
if(pregunta.toLowerCase() == "si"){

    alert("Ok, puede usar la app")

}else{

    alert("No puede usar la app")

}

let num = parseInt(prompt("ingrese un numero para multiplicar del 0 al 10"))
                        //i++=(index = index + 1)
for(let i=0 ; i <= 10 ; i++ ){ 

    let resMultiplicacion = num * i

    console.log(`${num} x ${i} = ${resMultiplicacion}`)

    console.log(numMultiplicar.toString() + `x` + i.toString() + `=` + resMultiplicacion.toString())

    alert(`${numMultiplicar} x ${i} = ${resMultiplicacion}`)

}*/

// let num = prompt("ingrese un numero")
// alert (num)

// if(num < 1000){

//     alert(" el numero es menor a 1000")

// }else if(num < 1000){

//     alert("el numero es menor o igual 900")

// }else if(num <= 1000){

//     alert("el numero es menor o igual a 1000")

// }else{

//     alert("el numero es mayor a 1000")

// }

// let palabra = "cura"
// palabra = palabra.toLowerCase() 

// let usuario = prompt("Ingrese su nombre de usuario").toLowerCase()

// let contraseña = parseInt(prompt("Ingrese su contraseña"))

// if(usuario == "exequiel" && contraseña === "1234" ){

//     alert(`su usuario y contraseña es correcto`)

// }else{

//     alert(`su usuario o contraseña es incorrecto`)
// }

function Persona (nombre, edad, calle) {

    this.nombre = nombre;
    this.edad = edad;
    this.pepe = calle;
    
};

const pers = new Persona("juan", 96, "russia");

// console.log(persona1)

console.log(pers.edad)

document.write(`hola soy ${pers.nombre} tengo ${pers.edad} años y soy de ${pers.pepe}`)