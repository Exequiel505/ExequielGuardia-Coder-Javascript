// numero1 = 37;
// numero2 = 12;
// numero3 = 44;
// numero4 = 35;

// res = (numero1 < numero4 || numero2 == numero3) && (numero1 != numero2 && numero4 > numero1)

// console

// -------------------------------------------------------------------------------------------------------------

// let dineroRoberto = prompt ("¿Roberto cuanto dinero tenes ?");

// let dineroPedro = prompt("¿Pedro cuanto dinero tenes ?");

// let dineroCofla = prompt("Cofla cuanto dinero tenes ?");


// if( dineroRoberto >= 0.6 && dineroRoberto < 1 ){

//     alert ("Roberto te alcanza para el helado de agua");

// }else if(dineroRoberto >= 1 && dineroRoberto < 1.6){

//     alert ("Roberto comprate el helado de crema ");

// }else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){

//     alert ("Roberto Comprate Heladix");

// }else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){

//     alert ("Roberto Comprate heladovich");

// }else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){

//     alert ("Roberto Comprate helardo");

// }else if(dineroRoberto == 2.9){

//     alert ("Roberto comprate el helado de confites o el 1/4");

// }else if(dineroRoberto >= 2.91 ){

//     alert (" Roberto, cuanto pensas pagar por un helado ?");

// }else if(dineroRoberto <=0 ){

//     alert (" Roberto, anda a laburar");

// }

// if( dineroPedro >= 0.6 && dineroPedro < 1 ){

//     alert ("Pedro,te alcanza para el helado de agua");

// }else if(dineroPedro >= 1 && dineroPedro < 1.6){

//     alert ("Pedro,comprate el helado de crema ");

// }else if(dineroPedro >= 1.6 && dineroPedro < 1.7){

//     alert ("Pedro,Comprate Heladix");

// }else if(dineroPedro >= 1.7 && dineroPedro < 1.8){

//     alert ("Pedro,Comprate heladovich");

// }else if(dineroPedro >= 1.8 && dineroPedro < 2.9){

//     alert ("Pedro,Comprate helardo");

// }else if(dineroPedro == 2.9){

//     alert ("Pedro,comprate el helado de confites o el 1/4");

// }else if(dineroPedro >= 2.91 ){

//     alert (" Pedro, cuanto pensas pagar por un helado ?");

// }else if(dineroPedro <=0 ){

//     alert (" Pedro, anda a laburar");

// }

// if( dineroCofla >= 0.6 && dineroCofla < 1 ){

//     alert ("Cofla,te alcanza para el helado de agua");

// }else if(dineroCofla >= 1 && dineroCofla < 1.6){

//     alert ("Cofla,comprate el helado de crema ");

// }else if(dineroCofla >= 1.6 && dineroCofla < 1.7){

//     alert ("Cofla,Comprate Heladix");

// }else if(dineroCofla >= 1.7 && dineroCofla < 1.8){

//     alert ("Cofla,Comprate heladovich");

// }else if(dineroCofla >= 1.8 && dineroCofla < 2.9){

//     alert ("Cofla,Comprate helardo");

// }else if(dineroCofla >= 2.9){

//     alert ("Cofla,comprate el helado de confites o el 1/4");
//     alert("y te sobran " + (dineroCofla- 2.9));

// }else {

//     alert (" Cofla, anda a laburar");

// }

//ARRRAYS-----------------------------------------------------------------------------------------------------------------------

// let autos = ["renault", "citroen", "toyota",];

// document.write(autos[1]);

//--------------------------------------------------------------------------------------------------------------------------------

// let pc1 = {
     
//     nombre : "Exequiel",

//     ram : "16gb",

//     procesador : "i-5",

//     espacio : "1TB",

// };

// let nombre = pc1.nombre;

// document.write(pc1["ram"]); //o sino se puede mostar como document.write(pc1.ram)

// document.write(`Hola ${nombre} tu ram es de  tu procesador es un  y tu espacio en disco es de `) // ${ram } no lo acepta me dice que no esta definida pero nombre si, OSO SOS PLS

//-------------------------------------------------------------------------------------------------------------------------------

// SECUENCIA WHILE , DO WHILE ,

// let numero = 0

// while(numero < 10) {

//     numero++;
//     document.write (`${numero} <br>`)

// }

//-------------------------------------------------------------------------------------------------------------------------------

// let numero = 0;

// do{

//     document.write(`${numero} <br>`);
//     numero ++;


// }while( numero > 6){

// };

//-------------------------------------------------------------------------------------------------------------------------------

//BREAK

// let numero = 0

// while (numero < 1000) {
    
//     numero++;

//     if (numero == 10) {

//         break; 
      
//     }
  
// }

// document.write(numero)

//-------------------------------------------------------------------------------------------------------------------------------

//FOR, FOR IN Y FOR OF

// for (let i = 5; i >= 0; i--) {

//     if (i == 2) {

//         continue;
        
//     }

//     document.write(`${i} <br>`);
    
// };

//-------------------------------------------------------------------------------------------------------------------------------

//FUNCIONES UNA BANDA DE DUDAS EN ESTA

// function nombre() {

//     let nombreIngresado = prompt("Ingrese su nombre")
//     saludar(nombreIngresado);
    
// };

// function saludar(nombreIngresado) {
    
//     document.write(`Hola ${nombreIngresado}`)
    
// };

// nombre();

//-------------------------------------------------------------------------------------------------------------------------------

// function calculadora(primerNum, segNum, operacion) {

//     switch (operacion) {

//         case "+":    
            
//         return primerNum + segNum;

//         case "-":   
       
//         return primerNum - segNum;

//         case "*":

//         return primerNum * segNum;

//         case "/":

//         return primerNum / segNum;

//         default:

//         return 0;
//     }
    
// };

// document.write( calculadora(3,5,"/" ) + "<br>")
// document.write( calculadora(3,5,"*") + "<br>")
// document.write( calculadora(3,5,"-") + "<br>")
// document.write( calculadora(3,5,"+") + "<br>")

//-------------------------------------------------------------------------------------------------------------------
//NO ENTENDI NADA XXD

// function promedio(total, cantidad) {

//     let resultado = total / cantidad
//     return resultado
    
// };

// function acumulador(acumulador, notaSumada) {

//     return acumulador = acumulador + notaSumada
    
// };
// function pedirCantidad() {
//     let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea"))
//     return cantidadNotas
// };

// let nota = 0
// let acum = 0
// let prom = 0
// let cantNotas = pedirCantidad()

// for (let i = 0; i < cantNotas ; i++) {
    
//     nota = parseInt(prompt(`ingrese la nota ${i+1}`))
//     acum = acumulador( acum, nota )
    
// };

// prom = promedio(acum, cantNotas)

// document.write (`la suma tota es ${acum} <br>`)
// document.write(`el promedio es ${prom}`)
//console.log("el promedio es " + promedio(acum,cantNotas))


// function saludar (){

//     let respuesta = prompt("hola guachin todo bien ?");

//     if (respuesta == "bien") {

//         alert("me alegro")
        
//     } else {

//         alert("mal ahi")
        
//     }

// };

// saludar()

//-------------------------------------------------------------------------------------------------------------------------------

// function valor() {

//     let respuesta = prompt("que numero queres")

//     return "respuesta";
 
// };

// let numero = valor()

// document.write(numero)

// function suma(num1,num2) {

//     let res = num1 + num2;

//     return res
    
// }

// let res = suma(20,24)

// document.write(res)

//FUNCIONES FLECHA

//-------------------------------------------------------------------------------------------------------------------------------

// const saludar = nombre =>


//    document.write (`hola ${nombre} como estas ? `);


// saludar ("pedro")


//-------------------------------------------------------------------------------------------------------------------------------
// const aprobacion = (time) =>{

//     let edad = prompt("cual es tu edad ?")

//     if (edad >= 18) {

//         alert("podes pasar")
    
//         if (time >= 2 && time < 7 ) {
            
//             alert (`son las ${time}:00hs podes pasar gratis`)
//         }
        
        
//     } else {
    
//         alert("no podes pasar")
        
//     }

// };

// aprobacion (3);
// aprobacion (5);
// aprobacion (6);

//-------------------------------------------------------------------------------------------------------------------------------

//PROGRAMACION ORIENTADA A OBJETOS

// const integrante1 ={

//     nombre: "exe",
//     edad:18,
//     ciudad: "maipu"

// };

// const integrante2 = {

//     nombre:"gonza",
//     edad: 48,
//     cuidad: "la pc"

// }

// document.write(integrante1.nombre + "<br>")
// document.write(integrante2["edad"] + "<br>")
// document.write(integrante2)
// console.log(integrante2)

//----------------------------------------------------------------------------------

// const personal = {

//     nombre: "axel",
//     edad: 99,
//     calle: "mucha"
// };

// personal["nombre"] = "juan"
// personal.edad = 23

// document.write(personal["nombre"] + "<br>") 
// document.write(personal.edad)

//-----------------------------------------------------------------------------

//FUNCIONES CONSTRUCTORAS

// function Persona( nombre, edad, ciudad ){

//     this.nombre = nombre,
//     this.edad = edad,
//     this.ciudad = ciudad
//     this.info = `yo me llamo ${nombre} tengo ${edad} años y soy de ${ciudad} `
  
// };

// const exe = new Persona("exee",99,"Mar del plata")
// console.log (exe)

// document.write(exe.info)



// class animal{

//     constructor(especie, edad, color ) {

//         this.especie = especie
//         this.edad = edad
//         this.color = color
//         this.info = ` El ${especie} tiene ${edad} años y es de color ${color} `
//     }

//     verInfo(){
//         document.write(`${this.info} <br>`)
//     }

// }

// const perro = new  animal (" perro ", 5 , " marron ")
// const gato = new  animal (" gato ", 2 , " negro ")
// const pajaro = new  animal (" pajaro ", 1 , " amarillo ")

// document.write ( perro.info )

//  perro.verInfo()
// gato.verInfo()
// pajaro.verInfo()

//-------------------------------------------------------------------------------------------------------------------------------

// array1 = ["maria", "josefa","roberta"];

// array2 = ["pedro","marcelo",array1, "josefina"];

// forRancio:

// for (let array in array2) {

//     if (array == 2) {

//         for (let array of array1) {

//             if (array == "josefa") {

//                 continue forRancio;

//             }

//             document.write(array + "<br>");
            
//         }
        
//     }else{

//         document.write(array2[array] + "<br>");

//     }
// }

//---------------------------------------------------------------------------------------------------------------------------------

// let elegir = prompt("Eliga cual de estos productos quiere: Creatina, Proteina")

// const producto1 = {nombre: "Creatina" , precio: 1000};
// const producto2 = {nombre: "Proteina" , precio: 1500};

// function obtenerPrecios(producto) {

//     const precioSinDescuento = producto.precio
//     const precioConDescuento = producto.precio * 0.9
//     const precioConSuperDescuento = producto.precio * 0.7

//     return {precioSinDescuento, precioConDescuento, precioConSuperDescuento};
// };

// const {precioSinDescuento, precioConDescuento, precioConSuperDescuento} = obtenerPrecios(producto1)

// document.write(obtenerPrecios["precio"])

