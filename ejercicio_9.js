//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(param) {
  let total = 0 // esta variable guardará el resultado final de la suma
  for (let i = 0; i < param.length; i++) {
    // el bucle recorre elemento a elemento
    total = total + param[i] // total es igual a la suma del elemento del array más el total, que parte de 0, pero que en cada vuelta irá creciendo en el valor a medida que vaya sumando y avanzando dentro del array
  }
  return total // que devuelva el resultado de total una vez finalizado el bucle
}
console.log(sumAll(numbers)) // que imprima el resultado

// RESULTADO
// 151
