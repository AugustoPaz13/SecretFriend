/*
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo'); //Pide al usuario un nombre
    const nombre = input.value.trim(); //Elimina espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(var i=0;i<amigos.length;i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li); // Agrega el elemento li a la lista ul
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado;
    }
}

