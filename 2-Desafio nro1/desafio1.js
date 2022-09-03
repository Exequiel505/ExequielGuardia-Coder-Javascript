do {

    var num =parseInt(prompt("Ingrese un numero para saber si es par o impar o escriba para terminar"))

    if (! isNaN(num)) {

        let res = esPar(num)

        alert(res)
        
    }
    
} while ( num != 0 );


function esPar(pepe){

    return ( pepe % 2 == 0 ) 
 
}
