function anadirTarea() {

    const input = document.getElementById("tarea");
    const lista = document.getElementById("lista");

    const tarea = document.createElement("div");
    tarea.innerText = input.value;

    lista.appendChild(tarea); /*esta parte la busque en internet*/

    input.value = "";
}