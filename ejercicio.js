function operacion(a, b, c, d) {
    let suma1 = a + b; // Suma de los dos primeros argumentos
    let suma2 = c + d; // Suma de los dos últimos argumentos
    let resultado = suma1 * suma2; // Multiplicación de las sumas

    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

// Ejemplo de uso
operacion(1, 2, 3, 4); // Salida: ¡El número es menor que 50!
operacion(10, 20, 30, 40); // Salida: ¡El número es mayor que 50!