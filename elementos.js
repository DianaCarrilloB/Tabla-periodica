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
    },
    {
        numero: 19,
        simbolo: "K",
        nombre: "Potasio",
        columna: 1,
        fila: 4,
        color: "grupo1"
    },
    {
        numero: 20,
        simbolo: "Ca",
        nombre: "Calcio",
        columna: 2,
        fila: 4,
        color: "grupo2"
    },
    {
        numero: 21,
        simbolo: "Sc",
        nombre: "Escandio",
        columna: 3,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 22,
        simbolo: "Ti",
        nombre: "Titanio",
        columna: 4,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 23,
        simbolo: "V",
        nombre: "Vanadio",
        columna: 5,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 24,
        simbolo: "Cr",
        nombre: "Cromo",
        columna: 6,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 25,
        simbolo: "Mn",
        nombre: "Manganeso",
        columna: 7,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 26,
        simbolo: "Fe",
        nombre: "Hierro",
        columna: 8,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 27,
        simbolo: "Co",
        nombre: "Cobalto",
        columna: 9,
        fila: 4,
        color: "transicion"
    },
    {
    numero: 28,
        simbolo: "Ni",
        nombre: "Níquel",
        columna: 10,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 29,
        simbolo: "Cu",
        nombre: "Cobre",
        columna: 11,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 30,
        simbolo: "Zn",
        nombre: "Zinc",
        columna: 12,
        fila: 4,
        color: "transicion"
    },
    {
        numero: 31,
        simbolo: "Ga",
        nombre: "Galio",
        columna: 13,
        fila: 4,
        color: "grupo13"
    },
    {
        numero: 32,
        simbolo: "Ge",
        nombre: "Germanio",
        columna: 14,
        fila: 4,
        color: "grupo14"
    },
    {
        numero: 33,
        simbolo: "As",
        nombre: "Arsénico",
        columna: 15,
        fila: 4,
        color: "grupo15"
    },
    {
        numero: 34,
        simbolo: "Se",
        nombre: "Selenio",
        columna: 16,
        fila: 4,
        color: "grupo16"
    },
    {
        numero: 35,
        simbolo: "Br",
        nombre: "Bromo",
        columna: 17,
        fila: 4,
        color: "grupo17"
    },
    {
        numero: 36,
        simbolo: "Kr",
        nombre: "Kriptón",
        columna: 18,
        fila: 4,
        color: "grupo18"
    },
    {
        numero: 37,
        simbolo: "Rb",
        nombre: "Rubidio",
        columna: 1,
        fila: 5,
        color: "grupo1"
    },
    {
        numero: 38,
        simbolo: "Sr",
        nombre: "Estroncio",
        columna: 2,
        fila: 5,
        color: "grupo2"
    },
    {
        numero: 39,
        simbolo: "Y",
        nombre: "Itrio",
        columna: 3,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 40,
        simbolo: "Zr",
        nombre: "Circonio",
        columna: 4,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 41,
        simbolo: "Nb",
        nombre: "Niobio",
        columna: 5,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 42,
        simbolo: "Mo",
        nombre: "Molibdeno",
        columna: 6,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 43,
        simbolo: "Tc",
        nombre: "Tecnecio",
        columna: 7,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 44,
        simbolo: "Ru",
        nombre: "Rutenio",
        columna: 8,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 45,
        simbolo: "Rh",
        nombre: "Rodio",
        columna: 9,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 46,
        simbolo: "Pd",
        nombre: "Paladio",
        columna: 10,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 47,
        simbolo: "Ag",
        nombre: "Plata",
        columna: 11,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 48,
        simbolo: "Cd",
        nombre: "Cadmio",
        columna: 12,
        fila: 5,
        color: "transicion"
    },
    {
        numero: 49,
        simbolo: "In",
        nombre: "Indio",
        columna: 13,
        fila: 5,
        color: "grupo13"
    },
    {
        numero: 50,
        simbolo: "Sn",
        nombre: "Estaño",
        columna: 14,
        fila: 5,
        color: "grupo14"
    },
    {
        numero: 51,
        simbolo: "Sb",
        nombre: "Antimonio",
        columna: 15,
        fila: 5,
        color: "grupo15"
    },
    {
        numero: 52,
        simbolo: "Te",
        nombre: "Telurio",
        columna: 16,
        fila: 5,
        color: "grupo16"
    },
    {
        numero: 53,
        simbolo: "I",
        nombre: "Yodo",
        columna: 17,
        fila: 5,
        color: "grupo17"
    },
    {
        numero: 54,
        simbolo: "Xe",
        nombre: "Xenón",
        columna: 18,
        fila: 5,
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