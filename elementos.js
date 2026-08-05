const elementos = [

    {
        numero:1,
        simbolo:"H",
        nombre:"Hidrógeno",
        clase:"hidrogeno",
        columna:1,
        fila:1
    },

    {
        numero:2,
        simbolo:"He",
        nombre:"Helio",
        clase:"grupo18",
        columna:18,
        fila:1
    },

    {
        numero:3,
        simbolo:"Li",
        nombre:"Litio",
        clase:"grupo1",
        columna:1,
        fila:2
    },

    {
        numero:4,
        simbolo:"Be",
        nombre:"Berilio",
        clase:"grupo2",
        columna:2,
        fila:2
    },

    {
        numero:5,
        simbolo:"B",
        nombre:"Boro",
        clase:"grupo13",
        columna:13,
        fila:2
    },

    {
        numero:6,
        simbolo:"C",
        nombre:"Carbono",
        clase:"grupo14",
        columna:14,
        fila:2
    },

    {
        numero:7,
        simbolo:"N",
        nombre:"Nitrógeno",
        clase:"grupo15",
        columna:15,
        fila:2
    },

    {
        numero:8,
        simbolo:"O",
        nombre:"Oxígeno",
        clase:"grupo16",
        columna:16,
        fila:2
    },

    {
        numero:9,
        simbolo:"F",
        nombre:"Flúor",
        clase:"grupo17",
        columna:17,
        fila:2
    },

    {
        numero:10,
        simbolo:"Ne",
        nombre:"Neón",
        clase:"grupo18",
        columna:18,
        fila:2
    }

];

const tabla = document.getElementById("tabla");

elementos.forEach(elemento => {

    const casilla = document.createElement("div");

    casilla.className = `elemento ${elemento.clase}`;

    casilla.style.gridColumn = elemento.columna;
    casilla.style.gridRow = elemento.fila;

    casilla.innerHTML = `
        <div class="numero">${elemento.numero}</div>
        <div class="simbolo">${elemento.simbolo}</div>
        <div class="nombre">${elemento.nombre}</div>
    `;

    tabla.appendChild(casilla);

});