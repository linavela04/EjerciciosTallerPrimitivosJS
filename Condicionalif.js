//Ejercicio 1
const readline = require('readline');

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada.question('Ingresa tu edad ', (respuesta) => {
  const edad = Number(respuesta);

  if (edad >= 18) {
    console.log('Puedes entrar');
  } else {
    console.log('No puedes entrar');
  }

  entrada.close();

  // Ejercicio 2
  const entrada2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  entrada2.question('Ingresa un número: ', (valor) => {
    const numero = Number(valor);

    if (numero > 0) {
      console.log('Es positivo');
    } else if (numero < 0) {
      console.log('Es negativo');
    } else {
      console.log('Es cero');
    }

    entrada2.close();
  });
});