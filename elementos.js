const elementos = [
    {
        numero: 1,
        simbolo: "H",
        nombre: "Hidrógeno",
        columna: 1,
        fila: 1,
        tipo: "no-metales"
    },
    {
        numero: 2,
        simbolo: "He",
        nombre: "Helio",
        columna: 18,
        fila: 1,
        tipo: "gases-nobles"
    },
    {
        numero: 3,
        simbolo: "Li",
        nombre: "Litio",
        columna: 1,
        fila: 2,
        tipo: "alcalinos"
    },
    {
        numero: 4,
        simbolo: "Be",
        nombre: "Berilio",
        columna: 2,
        fila: 2,
        tipo: "alcalinoterreos"
    }
];


const tabla = document.getElementById("tabla");


elementos.forEach(elemento => {

    tabla.innerHTML += `
        <div class="elemento ${elemento.tipo}" 
        style="grid-column:${elemento.columna}; grid-row:${elemento.fila};">
    
            <span class="numero">${elemento.numero}</span>

            <h2>${elemento.simbolo}</h2>

            <span class="nombre">${elemento.nombre}</span>

        </div>
    `;

});