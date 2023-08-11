
const boton = document.getElementById("saludarButton");
document.addEventListener("DOMContentLoaded", function() {  
  boton.removeAttribute('onclick');
    boton.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
  });