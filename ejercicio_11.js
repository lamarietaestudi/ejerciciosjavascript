//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
//pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let total = 0; //esta variable guardará el valor de la suma
function sumMixedElements(param) {
  // el bucle recorre todos los elementos del array mixedElements
  for (i = 0; i < param.length; i++) {
    //para saber qué tipos de datos son los elementos del array, y vemos que tenemos "number" y "string"
    let element = param[i];
    let elementType = typeof element;
    console.log(elementType);
    // el condicional debe tener dos opciones
    if (typeof param[i] === 'number') {
      // Si el elemento es un number que lo sume aL total.
      total = total + param[i];
    } else if (typeof param[i] === 'string') {
      // Si el elemento es un string, que sume la longitud del elemento.
      total = total + param[i].length;
    }
  }
  return total; // que devuelva el resultado
}
console.log(sumMixedElements(mixedElements)); // que imprima el resultado
// RESULTADO
// 41
// Ojo!!! el sexto elemento del array, (10) no es un número sino un string, y me he pasado un buen rato buscando un error que no existía...
