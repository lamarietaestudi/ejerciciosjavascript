//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
//1. Sumar todos los elementos del array
//2. Dividirlos por la cantidad de elementos del array
//3. El resultado debe poder aceptar decimales

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let totalSum = 0 // esta variable guardará el resultado final de la suma
  let countItems = param.length // esta variable calcula la cantidad de elementos del array
  let total = 0 // esta variable guardará el resultado final de la operación

  for (let i = 0; i < param.length; i++) {
    totalSum = totalSum + param[i]
    total = totalSum / countItems
  }
  return total.toFixed(2) // con -toFixed(num.decimales que queremos) redondeamos
}
console.log(average(numbers))
// RESULTADO
// 23.428571428571427
