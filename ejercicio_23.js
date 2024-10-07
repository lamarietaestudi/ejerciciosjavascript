//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];
let shortMovie = []; // array para guardar las películas cortas
let mediumMovie = []; // array para guardar las películas medianas
let longMovie = []; // array para guardar las películas largas
for (i = 0; i < movies.length; i++) {
  let movie = movies[i]; // cada elemento del array movies será una movie
  if (movie.durationInMinutes < 100) {
    shortMovie.push(movie.name); // añade (push) el nombre de la película (movie.name) al array shortMovie
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovie.push(movie.name);
  } else if (movie.durationInMinutes >= 200) {
    longMovie.push(movie.name);
  }
}
// Al imprimir el código por primera vez en la consola he visto que no había películas de menos de 100 minutos, así que he modificado el final añadiendo una nueva condición, para que se muestre un mensaje en lugar de una lista vacía cuando se de el caso:
if (shortMovie.length === 0) {
  console.log(
    'En esta lista no hay películas de menos de 100 minutos de duración.'
  );
} else if (shortMovie.length > 0) {
  console.log('Estas películas duran menos de 100 minutos: ' + shortMovie);
}
if (mediumMovie.length === 0) {
  console.log(
    'En esta lista no hay películas de entre 100 y 200 minutos de duración.'
  );
} else if (mediumMovie.length > 0) {
  console.log('Estas películas duran entre 100 y 200 minutos: ' + mediumMovie);
}
if (longMovie.length === 0) {
  console.log(
    'En esta lista no hay películas de entre 100 y 200 minutos de duración.'
  );
} else if (longMovie.length > 0) {
  console.log('Estas películas duran más de 200 minutos: ' + longMovie);
}
// RESULTADO
//En esta lista no hay películas de menos de 100 minutos de duración.
// Estas películas duran entre 100 y 200 minutos: Titan A.E.,Inception,Terminator
// Estas películas duran más de 200 minutos: Nightmare before Christmas,The Lord of the Rings,Star Wars: A New Hope
