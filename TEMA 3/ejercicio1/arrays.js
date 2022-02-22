
//1
/*
var array = [];
var  key,texto;
var salir=false;
do {
    texto = prompt("Introduzca palabras.Y cancelar para Salir.");
    if(texto!=null)
    {
      array.push(texto);
    }
    
} while (texto!=null);
do{
    alert("1)Ver primera palabra insertada \n 2)Ver última palabra insertada \n 3)Ver todas las palabras \n 4)Ver la palabra más larga \n 5)Ver la palabra más corta \n 6)Número de palabras insertadas \n 7)Buscar una palabra \n 8)Borrar duplicados \n 9)Salir ");
    key = parseInt(prompt("Que quieres ver :"));
    switch (key) {
    case 1:
        //Ver primera palabra insertada
        alert("primera palabra insertada :"+array[0]);
        break;
    case 2:
        //Ver última palabra insertada
        alert("Ver última palabra insertada :"+array.pop());
        break;
    case 3:
        //Ver todas las palabras
        alert("todas las palabras :"+array.join(" | "));
        break;
    case 4:
        //Ver la palabra más larga
        var max = array[0];
        for (let x of array) {

            if (x.length > max.length) {
                max = x;
            }
        }
        alert("la palabra más larga :"+max);
        break;
    case 5:
        //Ver la palabra más corta
        var min = array[0];
        for (let x of array) {
            if (x.length < min.length) {
                min = x;
            }
        }
        alert("la palabra más corta :"+min);
        break;
    case 6:
        //Número de palabras insertadas
        alert("Número de palabras insertadas" + array.length);

        break;
    case 7:
        //Buscar una palabra
        var palabra = prompt("palabra a buscar");
        alert("La palabra esta en : -> " + array.indexOf(palabra) + " <-");
        break;
    case 8:
        //Borrar duplicados
        var i = 0;
        const noDep = [];
        for (let x of array) {
            if (!noDep.includes(x)) {
                noDep.push(x);
            }
        }
        alert(noDep);
        break;
    case 9:
        salir=true;
        alert("ADIOS");
        break;
    default: alert("Perdon no esta este numero ");
    salir=true;
        break;
    }
}while(!salir);
*/
//ejercicio 2
/**
 * while(con<protraviones)
 * ocupada=false
 * random()*2 para horizontal o vertical
 * if(horiz|vertical)
 * fila=..math.random()*10
 * col=math.random()*7
 * cont=0;
 * while(!ocupada && cont <4)
 * {
 *    if(tablero[fila][col+cont])
 * {
 * ocupada=true;cont++}
 * if(tablero[fila-1][col+cont]&& fila>0)
 * {
 * ocupada=true;cont++}
 * if(tablero[fila+1][col+cont] && fila<9)
 * {
 * ocupada=true;cont++}
 * }
 */
var ocupada = false;
const TAM_FILAS = 10;
const TAM_COLUMNAS = 10;
const TAM_PORTAVIONES = 4;//2
const TAM_ACORAZADOS = 3;//3
const TAM_DESTRUCTORES = 2;//3
const TAM_FRAGATAS = 1;//1
let cont = 0;
let fila = 0;
let columna = 0;

var tablero = new Array(TAM_FILAS);
for (let i = 0; i < TAM_FILAS; i++) {
    tablero[i] = new Array(TAM_COLUMNAS);
    for (let j = 0; j < TAM_COLUMNAS; j++) {
        tablero[i][j] = false;
    }
}

while (cont < TAM_PORTAVIONES) {
    let cont2 = 0;
    let horizontal = parseInt(Math.random() * 2);
    if (0) {
        fila = parseInt(Math.random() * 10);
        columna = parseInt(Math.random() * 7);
        while (!ocupada && cont < 4) {
            if (tablero[fila][columna + cont2]) {
                ocupada = true;
                cont2++;
            }
            if (tablero[fila - 1][columna + cont2] && fila > 0) {
                ocupada = true; cont2++;
            }
            if (tablero[fila + 1][columna + cont2] && fila < 9) {
                ocupada = true; cont2++;
            }

        }


    } /*else {
        fila = parseInt(Math.random() * 10);
        columna = parseInt(Math.random() * 7);
        while (!ocupada && cont2 < 4) {
            if (tablero[columna][fila + cont2]) {
                ocupada = true;
                cont2++
            }
            if (tablero[columna - 1][fila + cont2] && fila > 0) {
                ocupada = true; cont2++
            }
            if (tablero[columna + 1][fila + cont2] && fila < 9) {
                ocupada = true; cont2++
            }
        }

    }*/
    if (ocupada == false) {
        tablero[fila][columna] = true;
        cont++;
    }else{
        tablero[fila][columna] = false;
        cont++;
    }
}

document.write("<table id='t1' border='1' >");
for (let i = 0; i < TAM_FILAS; i++) {
    document.write("<tr>");
    for (let j = 0; j < TAM_COLUMNAS; j++) {
        if (tablero[i][j]) {
            document.write("<td id='ocupada'></td>");
        }
        else {
            document.write("<td id='vacia'></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");


/*
document.write("<table id='t1' border='1' >");
for (let i = 0; i <table 10; i++) {
    document.write("<tr>");
    for (let j = 0; j < 10; j++) {
        document.write("<td></td>");

    }
    document.write("</tr>");

}
document.write("</table>");
var cuatro = [2];
var tres = [3];
var dos = [3];
var uno = [2];
document.write("</table>");
var numAl = parseInt(Math.random() *2);
var num = parseInt(Math.random() * 2);
var table = document.getElementById("t1");
for (var i = 0, row; row = table.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {


       // table.rows[numAl].cells[3].style.background = "black";
    }
    for (let a = 0; a <2; a++) {
        table.rows[numAl].cells[num].style.background = "black";
    }
}
//document.getElementById("t1").rows[numAl].cells[num].style.background="black";
*/