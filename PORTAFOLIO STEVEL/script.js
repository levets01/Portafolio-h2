
//aca esta para cambiar a modo claro//

function cambiarTema() {
    document.body.classList.toggle("claro");
}

//aca se crea la alerta para mostrar el evento de que se envio el la solicitud//

document.querySelector("form").addEventListener("submit",function(){
    alert("Solicitud enviada correctamente")

});
