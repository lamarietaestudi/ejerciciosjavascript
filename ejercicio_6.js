// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
const loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < loop.length; i++) {
  console.log('Este es un resultado del PRIMER bucle: ' + loop[i])
}
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < loop.length; i++) {
  const resto = loop[i] / 2
  if (resto == 0) {
    console.log('Este es un resultado del SEGUNDO bucle: ' + loop[i])
  }
}
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.

const sheepSleep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Este es el resultado del TERCER bucle: ')
for (let i = 0; i < sheepSleep.length; i++) {
  if (sheepSleep[i] <= 9) {
    console.log('Intentando dormir 🐑...')
  } else {
    console.log('¡Dormido!')
  }
}
