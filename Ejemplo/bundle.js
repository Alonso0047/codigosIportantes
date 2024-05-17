'use strict';

function cargarNoticiasUltimaHora() {
    // Crear nueva sección de noticias de última hora
    const ultimaHoraSeccion = document.createElement("section");
    ultimaHoraSeccion.innerHTML = `
        <header>
            <h1>Noticias de Última Hora</h1>
        </header>
        <article>
            <img src="imagen-noticia3.jpg" alt="Imagen de la noticia 3">
            <h2>Título de la Noticia 3</h2>
            <p>Descripción de la Noticia 3.</p>
            <img src="imagen-noticia4.jpg" alt="Imagen de la noticia 4">
            <h2>Título de la Noticia 4</h2>
            <p>Descripción de la Noticia 4.</p>
            <img src="imagen-noticia5.jpg" alt="Imagen de la noticia 5">
            <h2>Título de la Noticia 5</h2>
            <p>Descripción de la Noticia 5.</p>
        </article>
    `;
    var primeraSeccion = document.querySelector("section");
    primeraSeccion.innerHTML = ultimaHoraSeccion.innerHTML;
    // Obtener la sección de "Más Noticias"
    
}

document.getElementById("masNoticiasBtn").addEventListener("click", function() {
    // Crear nueva sección de noticias
    const nuevaSeccion = document.createElement("section");
    nuevaSeccion.innerHTML = `
        <header>
            <h1>Titulo de la Noticia</h1>
            <p>Fecha: <span class="date">23 de abril de 2024</span></p>
        </header>
        <article>
            <img src="imagen1-noticia.jpeg" alt="Imagen de la noticia 1">
            <h2>Título de la Noticia 1</h2>
            <p>Descripción de la Noticia 1.</p>
            <img src="imagen2-noticia.jpg" alt="Imagen de la noticia 2">
            <h2>Título de la Noticia 2</h2>
            <p>Descripción de la Noticia 2.</p>
        </article>
        <footer>
            <p>Autor: <span class="author">Nombre del Autor</span></p>
            <button id="ultimaHoraBtn">Noticias de Última Hora</button>
        </footer>
    `;

    
    // Agregar la nueva sección de noticias al final del documento
    document.body.innerHTML = '';

    // Agregar la nueva sección de noticias al body
    document.body.appendChild(nuevaSeccion);

    // Evento para el botón de Noticias de Última Hora dentro de la nueva sección
    nuevaSeccion.querySelector("#ultimaHoraBtn").addEventListener("click", function() {
        // Llamar a la función para cargar noticias de última hora
        cargarNoticiasUltimaHora();
    });
});
