//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  let newArray = []; // esta variable guardará el nuevo array
  //el bucle recorre todos los elementos del array
  for (i = 0; i < param.length; i++) {
    if (!newArray.includes(param[i])) {
      //si el elemento NO está en el nuevo array
      newArray.push(param[i]); //añadirlo al nuevo array
    }
  }
  return newArray;
}
console.log(removeDuplicates(duplicates));

//RESULTADO
// [
//  'sushi',   'pizza',
//  'burger',  'potatoe',
//  'pasta',   'ice-cream',
//  'chicken', 'onion rings',
//  'soda'
// ]
