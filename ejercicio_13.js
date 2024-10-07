//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  let position = nameFinder.indexOf();
  for (i = 0; i < param.length; i++) {
    if (nameFinder.includes(param)) {
      return `true, el elemento está en la posición ${nameFinder.indexOf(
        param
      )}`; // se puede utilizar el return con las comillas francesas y crear la cadena de texto interpolando variables, como en console.log
    } else {
      return false;
    }
  }
}
//prueba de nombres, impares son true y pares false
console.log(finderName('Steve'));
console.log(finderName('Paul'));
console.log(finderName('Xabier'));
console.log(finderName('Albert'));
console.log(finderName('Marc'));
console.log(finderName('Jess'));

//RESULTADO
// true, el elemento está en la posición 1
// false
// true, el elemento está en la posición 6
// false
// true, el elemento está en la posición 10
// false
