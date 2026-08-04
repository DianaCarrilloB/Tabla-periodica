const elementos = [
    {
        numero: 1,
        simbolo: "H",
        nombre: "Hidrógeno",
        columna: 1,
        fila: 1,
        color: "hidrogeno"
    },
    {
        numero: 2,
        simbolo: "He",
        nombre: "Helio",
        columna: 18,
        fila: 1,
        color: "grupo18"
    },
    {
        numero: 3,
        simbolo: "Li",
        nombre: "Litio",
        columna: 1,
        fila: 2,
        color: "grupo1"
    },
    {
        numero: 4,
        simbolo: "Be",
        nombre: "Berilio",
        columna: 2,
        fila: 2,
        color: "grupo2"
    },
    {
        numero: 5,
        simbolo: "B",
        nombre: "Boro",
        columna: 13,
        fila: 2,
        color: "grupo13"
    },
    {
        numero: 6,
        simbolo: "C",
        nombre: "Carbono",
        columna: 14,
        fila: 2,
        color: "grupo14"
    },
    {
        numero: 7,
        simbolo: "N",
        nombre: "Nitrógeno",
        columna: 15,
        fila: 2,
        color: "grupo15"
    },
    {
        numero: 8,
        simbolo: "O",
        nombre: "Oxígeno",
        columna: 16,
        fila: 2,
        color: "grupo16"
    },
    {
        numero: 9,
        simbolo: "F",
        nombre: "Flúor",
        columna: 17,
        fila: 2,
        color: "grupo17"
    },
    {
        numero: 10,
        simbolo: "Ne",
        nombre: "Neón",
        columna: 18,
        fila: 2,
        color: "grupo18"
    },
    {
        numero: 11,
        simbolo: "Na",
        nombre: "Sodio",
        columna: 1,
        fila: 3,
        color: "grupo1"
    },
    {
        numero: 12,
        simbolo: "Mg",
        nombre: "Magnesio",
        columna: 2,
        fila: 3,
        color: "grupo2"
    },
    {
        numero: 13,
        simbolo: "Al",
        nombre: "Aluminio",
        columna: 13,
        fila: 3,
        color: "grupo13"
    },
    {
        numero: 14,
        simbolo: "Si",
        nombre: "Silicio",
        columna: 14,
        fila: 3,
        color: "grupo14"
    },
    {
        numero: 15,
        simbolo: "P",
        nombre: "Fósforo",
        columna: 15,
        fila: 3,
        color: "grupo15"
    },
    {
        numero: 16,
        simbolo: "S",
        nombre: "Azufre",
        columna: 16,
        fila: 3,
        color: "grupo16"
    },
    {
        numero: 17,
        simbolo: "Cl",
        nombre: "Cloro",
        columna: 17,
        fila: 3,
        color: "grupo17"
    },
    {
        numero: 18,
        simbolo: "Ar",
        nombre: "Argón",
        columna: 18,
        fila: 3,
        color: "grupo18"
    }
];


const tabla = document.getElementById("tabla");


elementos.forEach(elemento => {

    tabla.innerHTML += `
        <div class="elemento ${elemento.color}" 
        style="grid-column:${elemento.columna}; grid-row:${elemento.fila};">
    
            <span class="numero">${elemento.numero}</span>

            <h2>${elemento.simbolo}</h2>

            <span class="nombre">${elemento.nombre}</span>

        </div>
    `;

});