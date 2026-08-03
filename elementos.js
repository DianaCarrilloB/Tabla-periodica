const elementos = [
    {
        numero: 1,
        simbolo: "H",
        nombre: "Hidrógeno",
        columna: 1,
        fila: 1
    },
    {
        numero: 2,
        simbolo: "He",
        nombre: "Helio",
        columna: 18,
        fila: 1
    },
    {
        numero: 3,
        simbolo: "Li",
        nombre: "Litio",
        columna: 1,
        fila: 2
    },
    {
        numero: 4,
        simbolo: "Be",
        nombre: "Berilio",
        columna: 2,
        fila: 2
    }
];


const tabla = document.getElementById("tabla");


elementos.forEach(elemento => {

    tabla.innerHTML += `
        <div class="elemento" 
        style="grid-column:${elemento.columna}; grid-row:${elemento.fila};">
            
            <h2>${elemento.simbolo}</h2>
            <p>${elemento.nombre}</p>
            <p>${elemento.numero}</p>

        </div>
    `;

});