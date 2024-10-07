//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
//"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
];
let adultUsers = []; // variable que guardará a los usuarios mayores de edad
let noAdultUsers = []; // variable que guardará a los usuarios menores de edad
for (i = 0; i < users.length; i++) {
  let user = users[i]; // cada usuario será un user
  if (user.years < 18) {
    // si la edad del usuario es menor de 18
    noAdultUsers.push(user.name); // lo metes en la lista de menores de edad
  } else if (user.years >= 18) {
    // si la edad del usuario es mayor o igual que 18
    adultUsers.push(user.name); // lo metes en la lista de mayores de edad
  }
}
console.log(`Usuarios menores de edad: ${noAdultUsers}.`); // con las comillas francesas se puede intercalar
console.log(`Usuarios mayores de edad: ${adultUsers}.`); //   un string y una variable

// RESULTADO
// Usuarios menores de edad: Natasha,Khamala.
// Usuarios mayores de edad: Tony,Peter,Bruce.
