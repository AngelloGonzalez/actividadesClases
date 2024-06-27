// verificar la vinculacion

console.log('Este es mi Ejercicio 2');

// Ejercicios condicionales 

/* Crea un programa que solicite al usuario el precio original
de un producto y el porcentaje de descuento se acplicara. luego, calcula 
y muestra el precio final del descuento

    1. Descuento 20%
    2. Descuento 50%
    3. Descuento 70%
 */

// Solicitar el precio original

const precioOriginal = parseFloat(prompt('Ingrese precio orignal'));
const descuento = prompt('Defina el descuento que desea aplicar: \n 1 -> Descuento 20% \n 2 -> Para descuento del 50% \n 3 -> Para descuento 70% \n Elija 1, 2 o 3');

let precioFinal = 0;

// switch -> cuando tengo varios casos posibles

switch(descuento){
    case '1':
        precioFinal = precioOriginal - (precioOriginal*0.2);
        alert('Precio con descuento del 20% es: ' + precioFinal);
        break;
    case '2': 
        precioFinal = precioOriginal - precioOriginal*0.5;
        alert('Precio con descuento del 50% es: ' + precioFinal);
        break;
    case '3': 
        precioFinal = precioOriginal - precioOriginal*0.7;
        alert('Precio con descuento del 70% es: ' + precioFinal);
        break;
    default:
        alert('Digite una opción valida');


}




