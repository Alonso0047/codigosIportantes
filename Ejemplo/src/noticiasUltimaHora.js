import './masNoticias';

export function cargarNoticiasUltimaHora() {
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
