//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];
let totalSells = 0; // Esta variable guardará el valor de las ventas que se irá acumulando, y parte de 0.
for (i = 0; i < products.length; i++) {
  totalSells = products[i].sellCount + totalSells; // el valor de ventas totales será el de cada elemento, más el que esté acumulando en cada vuelta del bucle.
}
console.log(totalSells);

// RESULTADO
// 341
