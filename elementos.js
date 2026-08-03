const elementos = [
    {
        numero: 1,
        simbolo: "H",
        nombre: "Hidrógeno"
    },
    {
        numero: 2,
        simbolo: "He",
        nombre: "Helio"
    }
];

const tabla = document.getElementById("tabla");

elementos.forEach(elemento => {
    tabla.innerHTML += `
        <div class="elemento">
            <h2>${elemento.simbolo}</h2>
            <p>${elemento.nombre}</p>
            <p>${elemento.numero}</p>
        </div>
    `;
});