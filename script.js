let tablaPilotos = document.querySelector(".ranking-grid .table-container:nth-of-type(1)");
let tablaEquipos = document.querySelector(".ranking-grid .table-container:nth-of-type(2)");
let btnPilotos = document.querySelector("#btnPilotos");
let btnEquipos = document.querySelector("#btnEquipos");

// Estado inicial: mostramos pilotos, ocultamos equipos
tablaEquipos.style.display = "none";

btnPilotos.addEventListener("click", function() {
    tablaPilotos.style.display = "block";
    tablaEquipos.style.display = "none";
});

btnEquipos.addEventListener("click", function() {
    tablaEquipos.style.display = "block";
    tablaPilotos.style.display = "none";
});
