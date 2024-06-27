// verificar vinculacion con el html

console.log('Hola html soy JS');


//  EJERCICIO CONDICIONAL

/* verificacion de elegibilidad para votar
    1. Escribir programa para votar, +18 puede,-18 no puede votar
    ser ciudadano colombiano 
*/

let edad = parseInt(prompt('Ingrese su edad'));

let ciudania = prompt('Marque si o no, si eres colombiano');
let esCiudadano = confirm('¿Eres colombiano?'); 

console.log(edad, ciudania, esCiudadano);

// CONDICIONAL IF 

// El operador logico %% tiene que cumplir todas las condiciones

if(edad >=18 && esCiudadano == true){
    alert('Eres elegible para votar en las elecciones')
}else{
        alert('No eres elegible para votar en las elecciones')
}
