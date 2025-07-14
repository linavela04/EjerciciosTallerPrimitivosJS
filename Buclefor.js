//Ejercicio 1
console.log('Numeros del 1 al 10:');
for (let i = 1; i<=10; i ++){
    console.log(i);
}

//Ejercicio 2
const readline = require('readline');

// Ejercicio 1: imprimir del 1 al 10
console.log('Números del 1 al 10:');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ejercicio 2: tabla de multiplicar
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question('Ingresa un número para ver su tabla de multiplicar: ', (valor) => {
  const numero = Number(valor);

  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i= i + 1) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  entrada.close();
});