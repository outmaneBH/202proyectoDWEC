
do {
    var key = parseInt(prompt("Introduzca el ejercicio que quieres seleccionar:"));
    switch (key) {
        case 1:
            //1. Crea una página web que muestre un color de fondo aleatorio cada vez que entremos en ella
            var a = parseInt(Math.random() * 256);
            var b = parseInt(Math.random() * 256);
            var c = parseInt(Math.random() * 256);
            document.write("<div id='bg' style='background-color: rgb(" + a + "," + b + "," + c + ");'></div>");
            break;
        case 2:
            //2. Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido, es un número o no, y si es un número, decir si es par o no y si es primo o no.
            let num = prompt("introduzca un Numero");
            var primo = true;
            if (!isNaN(Number(num))) {
                alert("has introducido un numero");
                if (num % 2 == 0) {
                    alert("y es par");
                }
                else {
                    alert("y es impar");
                }
                for (var i = 2; i < num; i++) {
                    if (num % i == 0) {
                        primo = false;
                        break;
                    }
                }
                if (primo) {
                    alert("ademas es primo");
                }
                else {
                    alert("ademas no es primo");
                }
            }
            else {
                alert("no has introducido un numero");
            }
            break;
        case 3:
            //3. Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla finalmente información de cada persona en un único mensaje.
            var edad, sexo;
            var lista = "";

            for (var i = 1; i <= 10; i++) {
                edad = parseInt(prompt("Introduzca la edad nº " + i));
                sexo = prompt("introduzca el sexo de nº " + i);
                lista = lista + i + ". " + sexo + ". " + edad + " años" + "\n";
            }
            alert(lista);
            break;
        case 4:
            //4. Crea un script que lea números enteros hasta que el usuario introduzca un número 0. Finalmente debe mostrar el número máximo, el mínimo y la media de todos ellos. Debes de controlar que introduzca 
            //números y no cualquier otro carácter.
            var numero, max, min;
            var contador = 0;
            numero = parseInt(prompt("Tecla numero"));
            while (isNaN(numero)) {
                numero = parseInt(prompt("Tecla un numero valido"));
            }
            if (numero != 0) {
                max = numero;
                min = numero;
                var media = 0;
                while (numero != 0) {
                    if (numero < min) {
                        min = numero;
                    }
                    if (numero > max) {

                        max = numero;
                    }
                    media += numero;
                    contador++;
                    numero = parseInt(prompt("Tecla numero"));
                    while (isNaN(numero)) {
                        numero = parseInt(prompt("Tecla numero"));
                    }
                }
                console.log(min, max + " y medio :" + media / contador);
            }

            break;
        case 5:
            //5. Crea un script que permita validar una clave introducida por el usuario y tenga 3 intentos para 
            //introducirla bien. Si no la introduce bien, le da error y se sale del programa. La clave debe ser un 
            //número de 6 dígitos
            var clave;
            var intentos = 0;
            do {
                clave = parseInt(prompt("Tecla el clave"));
                intentos++;
            } while (isNaN(Number(clave)) && intentos <= 2);
            if (intentos == 3) {
                alert("Has intentado introducir errores 3 veces");
            }
            else {
                alert("Bienvenido a nuestro Programa");
            }
            break;
        case 6:
            //6. Crea un script que calcule las calificaciones de un grupo de alumnos. El profesor tendrá que introducir 
            //el número de alumnos que va a gestionar el script.
            var calificaciones;
            var alumnos, nombre, nExp, nota, notaFinal;
            var practica, teoria, actitud, mediapractica = 0, mediateoria = 0, mediaactitud = 0;
            var listaAl = "";
            alumnos = prompt("introduzca el numero de alumnos");
            for (let i = 0; i < alumnos; i++) {
                nombre = prompt("introduzca el nombre del alumno : " + i);
                nExp = prompt("introduzca el numero del expe : " + i);
                // nota=prompt("introduzca la nota del alumno :");
                practica = parseInt(prompt("introduzca la nota en practica : " + i));
                while (practica < 0 || practica > 10) {
                    practica = parseInt(prompt("introduzca la nota en practica : " + i));
                }
                teoria = parseInt(prompt("introduzca la nota en teoria : " + i));
                while (teoria < 0 || teoria > 10) {
                    teoria = parseInt(prompt("introduzca la nota en teoria : " + i));
                }
                actitud = parseInt(prompt("introduzca la nota en actitud : " + i));
                while (actitud < 0 || actitud > 10) {
                    actitud = parseInt(prompt("introduzca la nota en actitud : " + i));
                }
                notaFinal = (practica * 0.5) + (teoria * 0.4) + (actitud * 0.1);
                listaAl += nExp + " : " + nombre + " y su practica :" + practica + " , teoria :" + teoria + " ,actitud:" + actitud + " y la Nota final es :" + notaFinal + "\n";
                mediapractica += practica;
                mediateoria += teoria;
                mediaactitud += actitud;
            }
            alert(listaAl);
            alert("Media practica de todos los alumnos :" + mediapractica / alumnos + " ,Media teoria : " + mediateoria / alumnos + " ,Media actitud  : " + mediaactitud / alumnos);
            break;
        case 7:
            //. Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números que pides al 
            //usuario. El segundo número tiene que ser mayor o igual que el primer número.

            var num1 = parseInt(prompt("introduzca el numero 1"));
            while (isNaN(num1)) {
                var num2 = parseInt(prompt("introduzca otra vez el numero 1"));
            }
            var num2 = parseInt(prompt("introduzca el numero 2"));
            while (num1 > num2 || isNaN(num2)) {
                var num2 = parseInt(prompt("introduzca el numero 2 que sea mayor que el primero"));
            }
            var mult = "multiplos de 2 entre " + num1 + " y " + num2 + "\n";
            for (var i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    mult += i + " , ";
                }
            }
            alert(mult);
            break;
        case 8:
            //8. Escribe un script que calcule la suma de los números pares y los números impares de los números
            //comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta.
            var par = true;
            var pares = 0;
            var impares = 0;
            for (var i = 1; i < 99; i++) {
                if (i % 2 == 0) {
                    pares += i;
                    par = true;
                }
                else {
                    impares += i;
                    par = false
                }
            }
            if (par) {
                alert("PARES :" + pares);
            }
            else {
                alert("IMPARES :" + impares);
            }
            break;
        case 9:
            //9. Escribe un script que calcule la suma de los números pares y la suma de los números impares 
            //comprendidos entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el 
            //45 y el 89 y debes de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro 
            //lado la suma de los números impares. No contar extremos, es decir, el 45 y el 89 en este caso no se 
            //tienen en cuenta.
            var num1 = parseInt(prompt("introduzca el numero 1"));
            while (isNaN(num1)) {
                var num1 = parseInt(prompt("introduzca otra vez el numero 1"));
            }
            var num2 = parseInt(prompt("introduzca el numero 2"));
            while (num1 > num2 || isNaN(num2)) {
                var num2 = parseInt(prompt("introduzca el numero 2 que sea mayor que el primero"));
            }
            var par = true;
            var pares = "";
            var impares = "";
            for (var i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    pares += i;
                    par = true;
                }
                else {
                    par = false
                    impares += i
                }
            }
            if (par) {
                alert("PARES :" + pares);
            }
            else {
                alert("IMPARES :" + impares);
            }
            break;
        case 10:
            //10 factorial 
            var numero = parseInt(prompt("introduzca un numero "));
            var fact = 1;
            for (i = 1; i <= numero; i++) {
                fact = fact * i;
            }
            alert(`El factorial de ${numero} es el ${fact}`);
            break;
        default: alert("Perdon pero el numero ' " + key + " ' que has introducido no existe como ejercicio !");
            break;
    }

} while (key <= 10);



