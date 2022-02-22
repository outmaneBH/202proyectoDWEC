
do {
    var key = parseInt(prompt("Introduzca el numero del Ejercicio que quieres ejecutar"));
    switch (key) {
        case 1:
        
            var intentos = 1;
            var terminado = false, acertado = false;
            var numAL = parseInt(Math.random() * 101);
            do {
                var num = parseInt(prompt("Adivinar el número"));
                while (isNaN(num)) {
                    var num = prompt("Adivinar el número otra vez ! lo que has introducido no es valido");
                }
                if (num == numAL) {
                    alert("has acertado");
                    if (confirm("¿Quieres seguir Jugar?")) {
                        location.reload();
                    }
                    else {
                        document.write("has cancelado el juego <br>");
                        terminado = true;
                        acertado = true;
                        break;
                    }
                }
                else {
                    if (numAL > num) {
                        alert("el numero es mayor");
                    }
                    else {
                        alert("el numero es menor");
                    }
                    var a = intentos++;
                    if (a == 5) {
                        alert("has perdido  !!");
                        if (confirm("¿Quieres volver Jugar?")) {
                            location.reload();
                        }
                        else {
                            document.write("has cancelado el juego <br>");
                            terminado = true;
                            break;
                        }
                    }
                }
            } while (intentos <= 5);
            intentos--;
            document.write("Juego terminado: " + terminado + " <br>")
            document.write("Número de intentos: " + intentos + " <br>");
            document.write("Número acertado: " + acertado);
            break;
        case 2:
            var numero = parseInt(prompt("Un numero entero Positivo :"));

            document.write("<h3>Triangulo 1 </h3>");
            for (let i = 1; i <= numero; i++) {
                for (let j = 0; j < i; j++) {
                    document.write(" * ");
                }
                document.write("<br>");
            }

            document.write("<h3>Triangulo 2 </h3>");
            for (let i = numero; i > 0; i--) {
                for (let j = 0; j < i; j++) {
                    document.write(" * ");
                }
                document.write("<br>");
            }

            document.write("<h3>Triangulo 3 </h3>");
            for (let i = 1; i <= numero; i++) {
                for (let j = 1; j <= numero - i; j++) {
                    document.write("&nbsp;");
                }
                for (j = 1; j <= i; j++) {
                    document.write("*");
                }
                document.write("<br>");
            }

            document.write("<h3>Triangulo 4 </h3>");
            for (let i = numero; i > 0; i--) {
                for (let j = 1; j <= numero - i; j++) {
                    document.write("&nbsp;");
                }
                for (j = 1; j <= i; j++) {
                    document.write("*");
                }
                document.write("<br>");
            }
            break;
        case 3:
            var listaNum = 0;
            var listaCara = " ";
            var numeros;
            do {
                numeros = prompt("Numeros  :");
                if (isNaN(parseInt(numeros))) {
                    if (numeros != null) {
                        listaCara += numeros;
                    }
                }
                else {
                    listaNum += parseInt(numeros);
                }
            } while (numeros);
            alert("La suma de los numeros: " + listaNum + " , Y los caracteres son :" + listaCara);

            break;
        case 4:
            var numeroCar = 1;
            document.write("<table border='2'>");
            for (let index = 1; index <= 1000; index++) {
                document.write("<tr>");
                for (let j = 1; j <= 10; j++) {
                    document.write("<td class='numCar'>" + numeroCar + "</td>");
                    document.write("<td>&#" + numeroCar + "</td>");
                    numeroCar++;
                }
                document.write("</tr>");
            }
            document.write("</table>");
            break;
        case 5:
            var colorA = 0, colorB = 0, colorC = 0;
            for (var index = 1; index <= 2000; index++) {
                colorA = parseInt(Math.random() * 256);
                colorB = parseInt(Math.random() * 256);
                colorC = parseInt(Math.random() * 256);
                var posA = parseInt(Math.random() * 101);
                var posB = parseInt(Math.random() * 101);
                document.write("<div id='d1'>");
                document.write("<div style='bottom:" + posA + "%;left:" + posB + "%;background-color: rgb(" + colorA + "," + colorB + "," + colorC + ");'></div>");
                document.write("</div>");
            }
            break;
        default: alert("Has introducido ' " + key + " ' y no existe ESTE EJERCICIO intenta otra vez !"); break;
    }
} while (key <= 5);