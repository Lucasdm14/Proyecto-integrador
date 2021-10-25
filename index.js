// REGISTRARSE
const registrarse = document.getElementById("registrarse");
const showRegistro = document.getElementById("showRegistro");



showRegistro.onclick = function() {
    if (registrarse.style.display === "none") {
        registrarse.style.display = "flex";
    } else {
        registrarse.style.display = "none";
    }

};

// INICIAR SESION
const inicioSesion = document.getElementById("inicioSesion");
const showIniciarSesion = document.getElementById("showIniciarSesion");



showIniciarSesion.onclick = function() {
    if (inicioSesion.style.display === "none") {
        inicioSesion.style.display = "block";
    } else {
        inicioSesion.style.display = "none";
    }

};