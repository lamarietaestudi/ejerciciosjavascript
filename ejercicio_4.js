// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log('Este es el primer elemento del array: ' + avengers1[0])

// 1.2 Cambia el primer elemento de avengers2 a "IRONMAN"
const avengers2 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers2[0] = 'IRONMAN'
console.log('Cambio del primer elemento del array: ' + avengers2)

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
const arrayElements = avengers3.length
console.log('Número de elementos del array: ' + arrayElements)

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
console.log(
  'Este es el último elemento del array: ' + rickAndMortyCharacters[2]
)

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop()
console.log(
  'Elimino el último elemento del array y queda así: ' +
    rickAndMortyCharacters2 +
    ' y el primer y último elemento del array son: ' +
    rickAndMortyCharacters2[0] +
    ' y ' +
    rickAndMortyCharacters2[4]
)

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 2)
console.log(
  'Elimino el segundo elemento del array y queda así: ' +
    rickAndMortyCharacters3
)

//RESULTADO
// Este es el primer elemento del array: HULK
// Cambio del primer elemento del array: IRONMAN,SPIDERMAN,BLACK PANTHER
// Número de elementos del array: 3
// Este es el último elemento del array: Jerry
// Elimino el último elemento del array y queda así: Rick,Beth,Jerry,Morty,Summer y el primer y último elemento del array son: Rick y Summer
// Elimino el segundo elemento del array y queda así: Rick,Morty,Summer,Lapiz Lopez
