// Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
];
for (i = 0; i < toys.length; i++) {
  let newToys = []; // Esta variable guardará la nueva lista de juguetes
  if (toys[i].name.includes('gato')) {
    // si el nombre del juguete incluye la palabra gato
    toys.push(); // borra el elemento
  } else {
    newToys = toys[i]; // el juguete pasa a la nueva lista de juguetes
    console.log(newToys); // imprime la nueva lista de juguetes
  }
}

//RESULTADO
// { id: 5, name: 'Buzz MyYear' }
// { id: 11, name: 'Action Woman' }
// { id: 23, name: 'Barbie Man' }
