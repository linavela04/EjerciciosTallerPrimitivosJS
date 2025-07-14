//Usar prompt
//Ejercicio 1

const readline = require('readline');
const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


interfaz.question('En qué año naciste?' , (an_o) => {

    const edad = 2025 - Number(an_o);

    console.log(`Tu edad es: ${edad}`);
    interfaz.close();


//Ejercicio 2
 const entrada = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    entrada.question('Ingresa el primer número: ', (num1) => {
        entrada.question('Ingresa el segundo número: ', (num2) => {
            const suma = Number(num1) + Number(num2);
            console.log(`La suma de los dos números es: ${suma}`);
            entrada.close();
        });
    });
});
