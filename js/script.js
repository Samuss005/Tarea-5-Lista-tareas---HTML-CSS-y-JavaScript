/**Funcion que se ejecuta cuando se aprieta el boton añadir  */
function anadirTarea() {

    /* Buscamos el input en el html (el boton añadir)*/ 
    const input = document.getElementById("tarea");
    /*Es el lugar donde se van a guardar las tareas que pongamos*/
    const lista = document.getElementById("lista");
     /*Crea un div que sera la tarea nueva*/
    const tarea = document.createElement("div");
    /*Se coge el valor que escribamos */
    tarea.innerText = input.value;

    lista.appendChild(tarea); /*esta parte la busque en internet*/

    input.value = "";
}