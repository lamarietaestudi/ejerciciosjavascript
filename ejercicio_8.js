// Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

const dogs = ['Hysky', 'San Bernardo', 'Beagle', 'Chiwawa', 'Pastor Alemán']
function longestWord(param) {
  let maxLength = 0 // variable para guardar el valor de la palabra con más letras, que parte de 0.
  let winner = '' // variable para guardar la palabra con más letras del array
  for (let i = 0; i < param.length; i++) {
    let element = param[i]
    let wordLength = element.length //bucle que recorre el array elemento a elemento y la variable element que guarda a cada uno de manera individual. La variable wordLength guarda el valor de la longitud de cada elemento (avenger)

    // condicional: si el valor de la longitud de un elemento es mayor que el máximo (maxLength), que parte de 0, el valor máximo se actualizará con dicho valor
    if (wordLength > maxLength) {
      maxLength = wordLength
      winner = element // winner será el elemento avenger resultante de la condición
    }
  }
  return winner // que la función devuelva el elemento con más letras
}
console.log(longestWord(avengers)) // que se imprima el resultado
console.log(longestWord(dogs)) // que se imprima el resultado

// Utilizando "param" (que es el array) y "element" (que es cada string del array) la función es reutilizable para otros arrays. De hecho he añadido otro array para probar y funciona igual. He tardado 3 días en resolver este ejercicio y reconozco que he consultado con ChatGPT para resolver dudas (porque tenía muchas y estaba atascada). Al final he entendido la lógica que se plantea.

//RESULTADO
//Captain A.
//Pastor Alemán
