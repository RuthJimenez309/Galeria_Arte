function filtrarPorCategoria(images, categoria) {
    return images.filter(function (imagen) {
        return imagen.category.toLowerCase() === categoria.toLowerCase();
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const images = [
        { path: '/backend/img/3.jpg', category: 'pintura' },
        { path: '/backend/img/4.jpg', category: 'fotografia' },
        { path: '/backend/img/5.jpg', category: 'pintura' },
       
    ];

    const galleryElement = document.getElementById('galeriaFotos');

    function mostrarTodasLasImagenes() {
        galleryElement.innerHTML = '';

        images.forEach(function (imagen) {
            const imgElement = document.createElement('img');
            imgElement.src = imagen.path;
            galleryElement.appendChild(imgElement);
        });
    }

    // Mostrar todas las imágenes al cargar la página
    mostrarTodasLasImagenes();

    // Función para filtrar y mostrar imágenes por categoría
    function mostrarImagenesPorCategoria(categoria) {
        const imagenesFiltradas = images.filter(function (imagen) {
            return imagen.category.toLowerCase() === categoria.toLowerCase();
        });

        galleryElement.innerHTML = ''; // Limpiar galería

        imagenesFiltradas.forEach(function (imagen) {
            const imgElement = document.createElement('img');
            imgElement.src = imagen.path;
            galleryElement.appendChild(imgElement);
        });
    }

    document.getElementById('linkPinura').addEventListener('click', function (event) {
        event.preventDefault();
        mostrarImagenesPorCategoria('pintura');
    });

    document.getElementById('linkFoto').addEventListener('click', function (event) {
        event.preventDefault();
        mostrarImagenesPorCategoria('fotografia');
    });


});
