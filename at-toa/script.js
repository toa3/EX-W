var boton = document.getElementById("subir");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

function subir() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function abrirmenu() {
    var mimenu = document.getElementById('menu');
    var icono = document.getElementById('equis');
    var todo = document.getElementById('cuerpo');
    var flecha = document.getElementById('top');

    if (mimenu.style.left === "0%") {
        mimenu.style.left = "-100%";
        icono.classList.remove('transformar');
        todo.classList.remove('scroll');
        flecha.classList.remove('none');

    } else {
        mimenu.style.left = "0%";
        icono.classList.add('transformar');
        todo.classList.add('scroll');
        flecha.classList.add('none');
    }
}