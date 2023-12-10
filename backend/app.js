function filtrarPorCategoria(images, categoria) {
    return images.filter(function (imagen) {
        return imagen.category.toLowerCase() === categoria.toLowerCase();
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const images = [
        { path: '/backend/img/3.jpg', category: 'pintura', periodo: 'Renacimiento'},
        { path: '/backend/img/4.jpg', category: 'fotografia', periodo: 'Contemporaneo' },
        { path: '/backend/img/5.jpg', category: 'pintura', periodo: 'Barroco' },
        { path: '/backend/img/image10.jpg', category: 'pintura', periodo: 'Renacimiento'},
        { path: '/backend/img/image20.jpg', category: 'fotografia', periodo: 'Contemporaneo' },
        { path: '/backend/img/image30.jpeg', category: 'pintura', periodo: 'Barroco' },
        { path: '/backend/img/image11.jpg', category: 'pintura', periodo: 'Renacimiento'},
        { path: '/backend/img/image21.jpg', category: 'fotografia', periodo: 'Contemporaneo' },
        { path: '/backend/img/image31.jpeg', category: 'pintura', periodo: 'Barroco' },
        { path: '/backend/img/image12.jpg', category: 'pintura', periodo: 'Renacimiento'},
        { path: '/backend/img/image22.jpg', category: 'fotografia', periodo: 'Contemporaneo' },
        { path: '/backend/img/image32.jpeg', category: 'pintura', periodo: 'Barroco' },
    ];

    const galleryElement = document.getElementById('galeriaFotos');
    const statsElement = document.getElementById('stats');

    function mostrarTodasLasImagenes() {
        galleryElement.innerHTML = '';

        images.map(function (imagen) {
            // Crear elemento de la tarjeta
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'contenedorI');
            cardElement.classList.add(imagen.category);

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
            asignarMarcoEspecifico(cardElement, imagen);
            
            // Agregar la tarjeta al contenedor de la galería
            galleryElement.appendChild(cardElement);
        });
    }

    // Mostrar todas las imágenes al cargar la página
    mostrarTodasLasImagenes();
    actualizarEstadisticas();

    function asignarMarcoEspecifico(cardElement, imagen) {
        // Utiliza map para asignar un color de marco específico según la categoría de la obra
        const coloresMarcos = new Map([
            ['pintura', 'red'],
            ['fotografia', 'blue'],
            // Agrega más categorías según sea necesario
        ]);
    
        const categoria = imagen.category.toLowerCase();
        const colorMarco = coloresMarcos.get(categoria) || 'black';
    
        // Agrega el estilo del marco a la tarjeta
        cardElement.style.borderColor = colorMarco;
    
        // Agrega la información del marco a la tarjeta
        const marcoElement = document.createElement('p');
        marcoElement.textContent = `Color del Marco: ${colorMarco}`;
        cardElement.appendChild(marcoElement);
    }

    function actualizarEstadisticas() {
        const estadisticas = obtenerEstadisticasPorPeriodo();

        // Muestra las estadísticas en el elemento correspondiente
        mostrarEstadisticas(estadisticas);
    }

    function obtenerEstadisticasPorPeriodo() {
        const estadisticas = images.reduce(function (accumulator, imagen) {
            const periodo = imagen.periodo || 'Desconocido';
            accumulator[periodo] = (accumulator[periodo] || 0) + 1;
            return accumulator;
        }, {});

        return estadisticas;
    }

    function mostrarEstadisticas(estadisticas) {
        statsElement.innerHTML = '<h2>Estadísticas por Período</h2>';
        const ulElement = document.createElement('ul');

        for (const periodo in estadisticas) {
            const liElement = document.createElement('li');
            liElement.textContent = `${periodo}: ${estadisticas[periodo]}`;
            ulElement.appendChild(liElement);
        }

        statsElement.appendChild(ulElement);
    }

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
