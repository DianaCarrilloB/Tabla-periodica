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
    },
    {
        numero: 5,
        simbolo: "B",
        nombre: "Boro",
        columna: 13,
        fila: 2,
        tipo: "metaloides"
    },
    {
        numero: 6,
        simbolo: "C",
        nombre: "Carbono",
        columna: 14,
        fila: 2,
        tipo: "no-metales"
    },
    {
        numero: 7,
        simbolo: "N",
        nombre: "Nitrógeno",
        columna: 15,
        fila: 2,
        tipo: "no-metales"
    },
    {
        numero: 8,
        simbolo: "O",
        nombre: "Oxígeno",
        columna: 16,
        fila: 2,
        tipo: "no-metales"
    },
    {
        numero: 9,
        simbolo: "F",
        nombre: "Flúor",
        columna: 17,
        fila: 2,
        tipo: "halogenos"
    },
    {
        numero: 10,
        simbolo: "Ne",
        nombre: "Neón",
        columna: 18,
        fila: 2,
        tipo: "gases-nobles"
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