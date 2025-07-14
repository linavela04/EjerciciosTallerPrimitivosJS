//Repetir mientras la condición sea verdadera
//Ejercicio 1

const readline = require('readline');

const entrada1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entrada1.question('Ingresa un número para contar desde 1 hasta ese número: ', (valor) => {
  const limite = Number(valor);
  let contador = 1;

  console.log(`Contando del 1 al ${limite}:`);
  while (contador <= limite) {
    console.log(contador);
    contador++;
  }

  entrada1.close();

  // Ejercicio 2
  const entrada2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function pedirContraseña() {
    entrada2.question('Ingresa la contraseña: ', (clave) => {
      if (clave === '1234') {
        console.log('Contraseña correcta');
        entrada2.close();
      } else {
        console.log('Incorrecta. Intenta de nuevo.');
        pedirContraseña(); 
      }
    });
  }

  pedirContraseña(); 
});