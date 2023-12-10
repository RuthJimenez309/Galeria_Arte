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
            // Crear elemento de la tarjeta
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'contenedorI');

            // Crear elemento de la imagen dentro de la tarjeta
            const imgElement = document.createElement('img');
            imgElement.src = imagen.path;
            imgElement.alt = imagen.category;
            imgElement.classList.add('card-img-top');

            // Crear elemento del cuerpo de la tarjeta
            const cardBodyElement = document.createElement('div');
            cardBodyElement.classList.add('card-body');

            // Crear elemento del párrafo dentro del cuerpo de la tarjeta
            const cardTextElement = document.createElement('p');
            cardTextElement.classList.add('card-text');
            cardTextElement.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
            
            
            // Anidar los elementos
            cardBodyElement.appendChild(cardTextElement);
            cardElement.appendChild(imgElement);
            cardElement.appendChild(cardBodyElement);
            
            // Agregar la tarjeta al contenedor de la galería
            galleryElement.appendChild(cardElement);
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
            // Crear elemento de la tarjeta
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');

            // Crear elemento de la imagen dentro de la tarjeta
            const imgElement = document.createElement('img');
            imgElement.src = imagen.path;
            imgElement.alt = imagen.category;
            imgElement.classList.add('card-img-top');

            // Crear elemento del cuerpo de la tarjeta
            const cardBodyElement = document.createElement('div');
            cardBodyElement.classList.add('card-body');
            

            // Crear elemento del párrafo dentro del cuerpo de la tarjeta
            const cardTextElement = document.createElement('p');
            cardTextElement.classList.add('card-text');
            cardTextElement.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

            // Anidar los elementos
            cardBodyElement.appendChild(cardTextElement);
            cardElement.appendChild(imgElement);
            cardElement.appendChild(cardBodyElement);
            
            // Agregar la tarjeta al contenedor de la galería
            galleryElement.appendChild(cardElement);
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


    function generarEstadisticas() {
        const estadisticas = images.reduce(function (accumulator, imagen) {
            accumulator[imagen.category] = (accumulator[imagen.category] || 0) + 1;
            return accumulator;
        }, {});

        console.log('Estadísticas:', estadisticas);
    }  
   
    generarEstadisticas();

});
