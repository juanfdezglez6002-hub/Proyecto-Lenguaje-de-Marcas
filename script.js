let tablaPilotos = document.querySelector(".ranking-grid .table-container:nth-of-type(1)");
let tablaEquipos = document.querySelector(".ranking-grid .table-container:nth-of-type(2)");
let btnPilotos = document.querySelector("#btnPilotos");
let btnEquipos = document.querySelector("#btnEquipos");

/* Empieza la tabla de equipos en oculto para que solo se vea la de pilotos por defecto y luego ya se pueda cambiar */
tablaEquipos.classList.add("oculto");

btnPilotos.addEventListener("click", function() {
    tablaPilotos.classList.remove("oculto");
    tablaEquipos.classList.add("oculto");
});

btnEquipos.addEventListener("click", function() {
    tablaEquipos.classList.remove("oculto");
    tablaPilotos.classList.add("oculto");
});
