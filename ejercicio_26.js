//Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

let goodProducts = [];
let badProducts = [];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];
for (i = 0; i < products.length; i++) {
  if (products[i].sellCount >= 20) {
    // si el valor de las ventas de un producto es mayor o igual a 20, lo pones en la lista de buenos productos, junto los que ya tenga esta lista.
    goodProducts = products[i].name + goodProducts;
  } else if (products[i].sellCount < 20) {
    // si el valor de las ventas de un producto es menos a 20, lo pones en la lisata de malos productos, junto lo que ya tenga esa lista.
    badProducts = products[i].name + badProducts;
  }
}
console.log('Estos son los productos con más de 20 ventas: ' + goodProducts);
console.log('Estos son los productos con menos de 20 ventas: ' + badProducts);

// RESULTADO
// Estos son los productos con más de 20 ventas: Sable laser FXMochila de protones: Ghostbusters
// Estos son los productos con menos de 20 ventas: Varita de VoldemortFunko Dr. Strange
