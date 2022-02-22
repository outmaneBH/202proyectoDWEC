var osi = document.getElementById("cOsi");
var tCPiP = document.getElementById("cTcpip");
var modeloOsi = document.getElementById("modeloOSI");
var modeloTcp = document.getElementById("modeloTCPIP");
var btnOc = document.getElementById("ocultar");
var btnOcAll = document.getElementById("todo");
var capaTodo = document.getElementById("capaTodo");
var aside = document.getElementsByTagName("aside")[0];
var main = document.getElementsByTagName("main")[0];
var header = document.getElementsByTagName("header")[0];

osi.addEventListener("click", show);
tCPiP.addEventListener("click", show2);
function show() {
    if (osi.checked) {
        modeloOsi.style.display = "block";
    } else {
        modeloOsi.style.display = "none";
    }
}
function show2() {
    if (tCPiP.checked) {
        modeloTcp.style.display = "block";
    } else {
        modeloTcp.style.display = "none";
    }
}
btnOc.addEventListener("click", ocultar);
function ocultar() {
    osi.checked = false
    tCPiP.checked = false
    modeloOsi.style.display = "none";
    modeloTcp.style.display = "none";
}

btnOcAll.addEventListener("click", ocultarTodo);
function ocultarTodo() {
    header.style.display="none";
    aside.style.display = "none";
    main.style.display = "none";
    capaTodo.style.top=0;
}
capaTodo.addEventListener("click", mostarTodo);
function mostarTodo() {
    header.style.display="block";
    aside.style.display = "block";
    main.style.display = "block";
    capaTodo.style.top="-100%";
}