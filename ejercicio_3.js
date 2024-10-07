//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
const number1 = 10
const number2 = 5
console.log('Operación con variables: ' + number1 * number2)
//! otro modo, pero sin variables.
const multiplication = 5 * 10
console.log('Operación sin variables: ' + multiplication)

// 1.2 Divide 10 por 2 y muestra el resultado en un console.
const numberA = 10
const numberB = 2
console.log('Operación con variables: ' + numberA / numberB)
//! otro modo, pero sin variables.
const division = 10 / 2
console.log('Operación sin variables: ' + division)

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.
const numberX = 15
const numberY = 2
console.log('Operación con variables: ' + (numberX % numberY))
//! otro modo, pero sin variables.
const resto = 15 % 2
console.log('Operación sin variables: ' + resto)

// 1.4 Usa el correcto operador de asignación que resultará en o = 15,
// teniendo dos variables p = 10 y j = 5.
const p = 10
const j = 5
const o = p + j
console.log(
  'El operador correcto para que o = 15 es (+), una suma entre la variable p, de valor 10, y la variable j, de valor 5. Aquí podemos ver el resultado: ' +
    o
)

// 1.5 Usa el correcto operador de asignación que resultará en i = 50,
// teniendo dos variables c = 10 y m = 5.
const c = 10
const m = 5
const i = c * m
console.log(
  'El operador correcto para que i = 50 es (*), una multiplicación entre la variable c, de valor 10, y la variable m, de valor 5. Aquí podemos ver el resultado: ' +
    i
)

// RESULTADO
// Operación con variables: 50
// Operación sin variables: 50
// Operación con variables: 5
// Operación sin variables: 5
// Operación con variables: 1
// Operación sin variables: 1
// El operador correcto para que o = 15 es (+), una suma entre la variable p, de valor 10, y la variable j, de valor 5. Aquí podemos ver el resultado: 15
// El operador correcto para que i = 50 es (*), una multiplicación entre la variable c, de valor 10, y la variable m, de valor 5. Aquí podemos ver el resultado: 50
