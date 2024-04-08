1. **¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?**


    JavaScript se distingue de otros lenguajes de         programación por varias características que lo hacen único. Aquí hay algunas diferencias clave junto con ejemplos para ilustrarlas:

    * **Lenguaje de programación del lado del cliente y del servidor**
    JavaScript es uno de los pocos lenguajes de programación que puede ejecutarse tanto en el lado del cliente (navegador web) como en el lado del servidor (con Node.js). Esta capacidad de ejecución en ambos entornos hace que sea muy versátil y ampliamente utilizado en el desarrollo web.
    
       Ejemplo 👇
       
        ![Captura de pantalla 2024-04-08 a las 9.58.45](https://hackmd.io/_uploads/r1XTmmWxR.png)           
        

        Este es un ejemplo de JavaScript que se ejecuta en el lado del cliente, es decir, en el navegador web del usuario. Lo que hace es mostrar una ventana emergente de alerta con el mensaje "¡Hola, mundo!". La etiqueta <script> se utiliza para incluir código JavaScript directamente en el HTML de una página web. Cuando el navegador encuentra esta etiqueta, ejecuta el código JavaScript que contiene.

        Después vemos un ejemplo de JavaScript que se ejecuta en el lado del servidor utilizando Node.js. Lo que hace es crear un servidor HTTP que escucha en el puerto 8080. Cuando alguien realiza una solicitud HTTP al servidor (por ejemplo, al ingresar la dirección del servidor en un navegador web), el servidor responderá con el mensaje "¡Hola, mundo!" con un estado HTTP 200
    
    * **Tipado dinámico:**
A diferencia de lenguajes como Java, JavaScript es dinámicamente tipado, lo que significa que las variables no tienen un tipo de datos definido y pueden cambiar de tipo durante la ejecución del programa.

        Ejemplo 👇
   
         ![Captura de pantalla 2024-04-08 a las 10.05.11](https://hackmd.io/_uploads/B1bJIXbeC.png)
 
         Veamos el ejemplo línea por línea:
        `let variable = 5; // variable es de tipo número:`
        
         Aquí estamos declarando una variable llamada variable y le estamos asignando el valor 5. Como estamos inicializando la variable con un número, JavaScript infiere que el tipo de datos de variable es un número. 
         
        `variable = "Hola"; // ahora variable es de tipo string:` 
    
         Estamos reasignando el valor de variable a una cadena de texto "Hola". En JavaScript, podemos reasignar variables con diferentes tipos de datos en cualquier momento. Como resultado, la variable variable ahora contiene una cadena de texto en lugar de un número.    

        JavaScript es lo que se conoce como un lenguaje de tipado dinámico, lo que significa que el tipo de datos de una variable puede cambiar durante la ejecución del programa.            

    *  **Prototipado en lugar de herencia de clases:**

        En JavaScript, la herencia se logra mediante prototipos en lugar de clases como en otros lenguajes orientados a objetos. Esto permite una mayor flexibilidad en la creación de objetos y la herencia de propiedades y métodos.


       Ejemplo 👇


        ![Captura de pantalla 2024-04-08 a las 10.13.52](https://hackmd.io/_uploads/BynBPX-e0.png)

        Este ejemplo muestra cómo podemos definir una función constructora en JavaScript junto con la herencia de prototipos. Vamos a analizarlo línea por línea:

        `function Animal(nombre) {
    this.nombre = nombre;
}
`

        Aquí estamos definiendo una función constructora llamada Animal. Una función constructora es un tipo de función en JavaScript que se utiliza para crear objetos. En este caso, la función toma un parámetro nombre y establece una propiedad nombre en el objeto actual (que en este contexto se refiere al objeto que será creado con la función constructora). En otras palabras, cuando se crea un nuevo objeto utilizando esta función constructora, se le asignará un nombre proporcionado como argumento.
    
        `Animal.prototype.saludar = function() {
    console.log('Hola, soy ' + this.nombre);
};
`

        Aquí estamos agregando un método llamado saludar al prototipo de la función Animal. El prototipo es un mecanismo en JavaScript que permite compartir propiedades y métodos entre múltiples objetos. El método saludar simplemente imprime un mensaje por consola que incluye el nombre del animal.
    
        `let perro = new Animal('Bobby');
`


        Aquí estamos creando un nuevo objeto perro utilizando la función constructora Animal y pasando 'Bobby' como argumento para el nombre del animal. Esto crea un nuevo objeto con una propiedad nombre establecida en 'Bobby'.
    
    
        `perro.saludar(); // Salida: Hola, soy Firulais
`
    
    
        Finalmente, estamos llamando al método saludar en el objeto perro, lo que imprimirá "Hola, soy Bobby" en la consola. Esto muestra cómo puedes utilizar el método definido en el prototipo del constructor Animal en el objeto perro, lo que demuestra el concepto de herencia de prototipos en JavaScript.
    
    
    * **Funciones de orden superior y clausuras:**

        JavaScript permite funciones de orden superior, lo que significa que las funciones pueden tomar otras funciones como argumentos o devolverlas como valores. También soporta clausuras, lo que permite que las funciones internas accedan al ámbito de las funciones externas incluso después de que la función externa haya terminado.

        Ejemplo 👇

        ![Captura de pantalla 2024-04-08 a las 10.31.25](https://hackmd.io/_uploads/BJ9wi7beA.png)


        Este ejemplo muestra cómo puedes usar funciones de orden superior y clausuras en JavaScript. Veamos cada parte del código:
    
    
        `function suma(a) {
    return function(b) {
        return a + b;
    };
}
`
    
        Aquí definimos una función llamada suma que toma un parámetro a. Dentro de esta función, se devuelve otra función anónima que toma un parámetro b. Esta función interna suma a y b y devuelve el resultado.
    
        `let suma5 = suma(5);
`

        Luego, creamos una nueva función llamada suma5 asignando el resultado de llamar a suma(5). Al llamar suma(5), estamos pasando 5 como argumento para a, lo que resulta en una función que suma 5 al número que se le pase como argumento posteriormente.
    
        `console.log(suma5(3)); // Salida: 8
`

        Finalmente, llamamos a suma5 con el argumento 3. Esto ejecuta la función interna que devuelve la suma de 5 (el valor de a en la función suma5) y 3 (el valor pasado como argumento). Por lo tanto, la salida será 8.
    
    
        Este patrón es útil cuando necesitas crear funciones que realicen tareas similares pero con un pequeño ajuste en uno o más parámetros. En este caso, suma5 es una función que suma 5 a cualquier número que se le pase como argumento, lo que te permite crear una función específica para sumar 5 sin tener que repetir el código. La capacidad de JavaScript para crear funciones dentro de otras funciones y retornarlas es lo que se conoce como clausuras, y es una característica poderosa que permite la creación de código más flexible y modular.
    

    * **Manejo de asincronía y eventos:**

        JavaScript es conocido por su manejo asincrónico de eventos, lo que le permite realizar operaciones sin bloquear el hilo principal de ejecución. Esto es crucial en aplicaciones web donde muchas operaciones, como la solicitud de recursos externos (por ejemplo, datos de un servidor), pueden tomar tiempo. JavaScript proporciona varias formas de manejar la asincronía, como devoluciones de llamada (callbacks), promesas y async/await.
    
        Ejemplo 👇
            
        
        ![Captura de pantalla 2024-04-08 a las 10.58.03](https://hackmd.io/_uploads/rJ_jZEZg0.png)

        En este ejemplo, el código se ejecuta secuencialmente. Se muestra "Inicio del programa" seguido de "Fin del programa". Sin embargo, la función setTimeout se ejecuta asincrónicamente después de un retraso de 2 segundos.
        
        
        ![Captura de pantalla 2024-04-08 a las 10.59.15](https://hackmd.io/_uploads/B1glME-xA.png)

        Esto significa que el mensaje "Después de 2 segundos" se mostrará en la consola después de que se haya mostrado "Fin del programa", demostrando cómo JavaScript maneja las operaciones asincrónicas sin bloquear la ejecución del código principal.
        
1. **¿Cuáles son algunos tipos de datos JS?**




    JavaScript admite varios tipos de datos que se utilizan para almacenar diferentes tipos de valores. A continuación veremos algunos de los tipos de datos más comunes en JavaScript, junto con ejemplos explicativos:

    * **Number** (Número):

        Este tipo de dato se utiliza para representar valores numéricos, ya sean enteros o decimales.
        
        
        ![Captura de pantalla 2024-04-08 a las 11.15.29](https://hackmd.io/_uploads/SJanSNZl0.png)


    * **String** (Cadena):

        Se utiliza para representar texto, que puede incluir letras, números y caracteres especiales, encerrados entre comillas simples (') o dobles (").
        
        ![Captura de pantalla 2024-04-08 a las 11.17.10](https://hackmd.io/_uploads/r1Qm8VZgA.png)
        
    *  **Boolean** (Booleano):

        Este tipo de dato representa un valor de verdadero (true) o falso (false).
        
        ![Captura de pantalla 2024-04-08 a las 11.21.30](https://hackmd.io/_uploads/S18XDVZgC.png)


    * **Array** (Arreglo):

        Se utiliza para almacenar una colección ordenada de elementos. Los elementos de un arreglo pueden ser de cualquier tipo de dato, y se acceden a través de un índice numérico.
        
        
        ![Captura de pantalla 2024-04-08 a las 11.23.10](https://hackmd.io/_uploads/HkxsYv4Ze0.png)

    * **Object** (Objeto):

        Los objetos son estructuras de datos que representan una colección de pares clave-valor. Cada valor está asociado a una clave única dentro del objeto.
        
        ![Captura de pantalla 2024-04-08 a las 11.24.41](https://hackmd.io/_uploads/rJrkuVZxR.png)

    * **Null** (Nulo):

        Representa la ausencia intencional de cualquier valor o contenido.
        
        ![Captura de pantalla 2024-04-08 a las 11.25.49](https://hackmd.io/_uploads/r1FmdV-eR.png)


    * **Undefined** (Indefinido):

        Se utiliza para representar una variable que ha sido declarada pero no inicializada, o una propiedad que no existe en un objeto.
        
        ![Captura de pantalla 2024-04-08 a las 11.26.42](https://hackmd.io/_uploads/SyyDuVZl0.png)

    

    Estos son algunos de los tipos de datos más comunes en JavaScript, y son fundamentales para la programación en este lenguaje. Es importante entender cómo funcionan y cómo se utilizan en diferentes contextos.
    
    
3. **¿Cuáles son las tres funciones de String en JS?**

    En JavaScript, las cadenas de texto (strings) son objetos y, por lo tanto, tienen una variedad de métodos que se pueden utilizar para manipular y trabajar con ellas. Aquí hay tres funciones de cadena (métodos de String) comunes en JavaScript:
    
    * **toUpperCase()**:

        Esta función convierte todos los caracteres de una cadena en letras mayúsculas y devuelve la nueva cadena resultante.

        ![Captura de pantalla 2024-04-08 a las 11.33.52](https://hackmd.io/_uploads/B1aW5NZgR.png)
        
    * **concat()**:

         Esta función se utiliza para concatenar dos o más cadenas de texto y crear una nueva cadena resultante. En otras palabras, une (concatena) el contenido de una cadena con el contenido de otra cadena y devuelve una nueva cadena que contiene la combinación de ambas.
         
        ![Captura de pantalla 2024-04-08 a las 11.42.18](https://hackmd.io/_uploads/BkKW3NZlR.png)

        
        
    * **charAt(index):**

        Esta función devuelve el carácter en la posición especificada de una cadena. El índice (index) se pasa como argumento y comienza desde 0 para el primer carácter.
        
        
        ![Captura de pantalla 2024-04-08 a las 11.38.20](https://hackmd.io/_uploads/S1YMo4bxA.png)


    Estas son solo tres de las muchas funciones de cadena disponibles en JavaScript que puedes utilizar para manipular y trabajar con cadenas de texto de manera efectiva.
    
3. **¿Qué es un condicional?**

    Un condicional en JavaScript es una estructura de control que permite ejecutar cierto bloque de código si se cumple una condición específica. Veamos un ejemplo donde podemos usar un condicional para verificar si la edad es mayor o igual a 18, lo que indica que la persona es mayor de edad.
    
    En JavaScript, los condicionales más comunes son if, else if y else. Aquí tienes ejemplos de cada uno:
    
 


    
    Ejemplo👇
    
   ![Captura de pantalla 2024-04-08 a las 16.00.09](https://hackmd.io/_uploads/BkUOuO-gA.png)


    Se define la variable nombre con el valor "Thomas"
    `let nombre = "Thomas";`
    
     Se define la variable edad con el valor 19
    `let edad = 19;`
    
   
    
    Verificamos si la edad es mayor o igual a 18, si la condición es verdadera, se imprime que Thomas es mayor de edad
    `if (edad >= 18) { 
    console.log(nombre + " es mayor de edad.");}`
    
    Si la condición anterior no se cumple, se verifica si la edad es menor que 0, si la edad es menor que 0, se imprime que la edad no es válida
    `else if (edad < 0) { 
    console.log("Edad no válida.");}`
    
     Si ninguna de las condiciones anteriores se cumple, se imprime que Thomas es menor de edad
      `else { 
    console.log(nombre + " es menor de edad.");}`
    
    
    
    


5. **¿Qué es un operador ternario?**

    Un operador ternario es un operador condicional que se utiliza para hacer una evaluación basada en una condición y devolver un resultado diferente según el resultado de esa evaluación. A diferencia de los condicionales if...else, que utilizan bloques de código separados, el operador ternario es una expresión que se utiliza para realizar la evaluación de manera más concisa.
    El operador ternario es útil para escribir código más conciso y legible cuando se necesita tomar decisiones basadas en una única condición. Sin embargo, es importante usarlo con moderación para no sacrificar la claridad del código.
    
    * **La sintaxis del operador ternario en JavaScript es la siguiente:**

        ![Captura de pantalla 2024-04-08 a las 12.10.12](https://hackmd.io/_uploads/B1WcGSZl0.png)

        Veamos un ejemplo para ilustrar cómo funciona el operador ternario:
        
        ![Captura de pantalla 2024-04-08 a las 12.13.26](https://hackmd.io/_uploads/rJM8mHWeA.png)

        En este ejemplo, la variable edad tiene un valor de 19. Utilizamos el operador ternario para evaluar si la edad es mayor o igual a 18. Si la condición es verdadera (lo que significa que la persona es mayor de edad), se asigna el mensaje "Es mayor de edad" a la variable mensaje. Si la condición es falsa (la persona es menor de edad), se asigna el mensaje "Es menor de edad". En este caso, dado que la edad es 19, la salida será "Es mayor de edad".
        
        
6. **¿Cuál es la diferencia entre una declaración de función y una expresión de función?**

    La diferencia principal entre una declaración de función y una expresión de función en JavaScript radica en cómo son interpretadas por el motor de JavaScript durante la fase de compilación del código.
    
    Veamos unos ejemplos de cada uno de ellos:
    
    * **Declaración de función**:

        Una declaración de función es una forma de definir una función donde se utiliza la palabra clave function seguida del nombre de la función y su cuerpo. Las declaraciones de funciones son elevadas (hoisted) durante la fase de compilación, lo que significa que pueden ser utilizadas incluso antes de su declaración en el código.
        
        Ejemplo de declaración de función👇
    
        ![Captura de pantalla 2024-04-08 a las 12.26.54](https://hackmd.io/_uploads/BkjOLSZxR.png)
        
        En este ejemplo, estamos utilizando una declaración de función para definir una función llamada suma. La sintaxis es function nombreFuncion(parametros) { ... }. Esta función toma dos parámetros a y b, y devuelve la suma de los dos parámetros.
        Luego, llamamos a la función suma con los argumentos 5 y 3 usando suma(5, 3). Esto devuelve 8, que es la suma de 5 y 3.
        Finalmente, utilizamos console.log() para imprimir el resultado en nuestra consola.
    
    
    
    * **Expresión de función**

        Una expresión de función es una función definida como parte de una expresión. Esto significa que la función se asigna a una variable o se utiliza como parte de una expresión más grande. Las expresiones de función no son elevadas, lo que significa que solo están disponibles después de la línea de código en la que se declaran.
        
        Ejemplo de expresión de función👇
        
        
    
        ![Captura de pantalla 2024-04-08 a las 12.31.33](https://hackmd.io/_uploads/H1z9DSWg0.png)
        
        En este ejemplo, estamos utilizando una expresión de función para definir una función llamada resta. En este caso, estamos asignando la función a una variable llamada resta. La sintaxis es const|let|var nombreVariable = function(parametros) { ... }.
        La función toma dos parámetros a y b, y devuelve la resta de a menos b.
        Luego, llamamos a la función resta con los argumentos 8 y 3 usando resta(8, 3). Esto devuelve 5, que es la resta de 8 y 3.
        Finalmente, utilizamos console.log() para imprimir el resultado en nuestra consola.
        
        Ambos ejemplos logran lo mismo: definir una función que realiza una operación matemática y luego llamar a esa función con ciertos argumentos para obtener un resultado. La diferencia principal entre ellos radica en cómo están definidas las funciones: una utilizando una declaración de función y la otra utilizando una expresión de función asignada a una variable.
        
        
7. **¿Qué es la palabra this en JS?**

    En JavaScript, la palabra clave this se refiere al objeto actual en el contexto de ejecución actual. El valor de this depende de cómo se llama una función y dónde se encuentra la llamada a esa función. El comportamiento de this puede variar en diferentes situaciones, lo que puede resultar en confusión para los desarrolladores.

    Ejemplo en el contexto de un objeto👇
    
    ![Captura de pantalla 2024-04-08 a las 12.46.45](https://hackmd.io/_uploads/HkG7oSWxC.png)

    Veamos paso a paso qué está sucediendo:
    
    Se declara un objeto estudiante utilizando la sintaxis de objeto literal ({}).
    Este objeto tiene dos propiedades: nombre con el valor "Thomas" y edad con el valor 19.
    También tiene un método saludar que se define como una función. Esta función imprime un mensaje utilizando las propiedades nombre y edad del objeto estudiante mediante el uso de this.
    Dentro de la función saludar, this.nombre se refiere a la propiedad nombre del objeto estudiante y this.edad se refiere a la propiedad edad del mismo objeto.
    Finalmente, se llama al método saludar() en el objeto estudiante usando la notación de punto (estudiante.saludar()), lo que provoca que se imprima el mensaje "Hola, soy Thomas y tengo 19 años." en la consola.


    Ejemplo 'this' usando condicionales y métodos dentro del objeto👇
    
    ![Captura de pantalla 2024-04-08 a las 12.53.47](https://hackmd.io/_uploads/ry_62S-xR.png)

    En este ejemplo se declara un objeto estudiante utilizando la sintaxis de objeto literal ({}).
    Este objeto tiene dos propiedades: nombre con el valor "Thomas" y edad con el valor 19.
    Además, tiene un método llamado esMayorDeEdad, que se define como una función anónima dentro del objeto estudiante.
    Dentro del método esMayorDeEdad, se utiliza la palabra clave this para hacer referencia al objeto estudiante actual. Esto permite acceder a las propiedades del objeto, como nombre y edad.
    El método esMayorDeEdad verifica si la propiedad edad del objeto estudiante es mayor o igual a 18 utilizando un condicional if.
    Dependiendo del resultado de la condición, el método esMayorDeEdad imprime un mensaje indicando si el estudiante es mayor o menor de edad, incluyendo su nombre.
    Finalmente, se llama al método esMayorDeEdad() en el objeto estudiante, lo que resulta en la impresión del mensaje "Thomas es mayor de edad." en la consola, ya que la edad de Thomas es 19 y es mayor o igual a 18.


