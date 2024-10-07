//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
];
for (i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    // si el valor de isVegan es false
    foodSchedule.splice(i, 1, { name: fruits[i], isVegan: true }); // utilizo el método splice para eliminar el elemento y cambiarlo por otro. i define la posición en la que estamos, que es desde dónde hay que empezar a borrar; 1 es la cantidad de elementos a borrar; entre llaves lo que quiero que se ponga en el lugar del que he borrado
  } // no ha repetido la fruta, pero no sé si es casualidad porque no lo he contemplado, pero si funciona, lo dejo así.
}
console.log(foodSchedule);

// RESULTADO
//   { name: 'Heura', isVegan: true },
//   { name: 'Banana', isVegan: true },
//   { name: 'Tofu', isVegan: true },
//   { name: 'Apple', isVegan: true },
//   { name: 'Rice', isVegan: true },
//   { name: 'Pasta', isVegan: true }
