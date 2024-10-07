// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];
let newPlacesToTravel = []; // esta variable guardará el nuevo array
for (i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
    //si el id del elemento no es 11 y no es 40
    newPlacesToTravel.push(placesToTravel[i]); // añádelo al nuevo array
  }
}
console.log(newPlacesToTravel);
//RESULTADO
//{ id: 5, name: 'Japan' }
// { id: 23, name: 'Murcia' }
// { id: 44, name: 'Filipinas' }
// { id: 59, name: 'Madagascar' }
