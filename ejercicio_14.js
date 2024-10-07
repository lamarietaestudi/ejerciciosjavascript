//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  let wordCounter = []; // esta variable crea un array vacío
  for (i = 0; i < param.length; i++) {
    let element = param[i]; // esta variable es cada elemento del array
    if (wordCounter[element]) {
      // si el array (vacío al principio) contiene al elemento, que le sume uno al valor que ya tenga.
      wordCounter[element] += 1;
    } else {
      // sino que le ponga valor 1. De este modo si es la primera vez que lo encuentra se queda en 1 y si lo va encontrando le irá sumando 1 al valor que tenga cada vez que lo encuentre.
      wordCounter[element] = 1;
    }
  }
  return wordCounter;
}
console.log(repeatCounter(counterWords));

// RESULTADO
//[ code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 ]
