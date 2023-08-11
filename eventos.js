
const boton2 = document.getElementById("saludarButton");
document.addEventListener("DOMContentLoaded", function() {  
  boton2.removeAttribute('onclick');
    boton2.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
  });