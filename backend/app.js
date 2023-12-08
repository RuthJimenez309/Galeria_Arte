document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://placekitten.com/200/300",
        "https://placekitten.com/201/300",
        "https://placekitten.com/202/300",
        "https://placekitten.com/203/300",
        // Agrega más URLs según sea necesario
    ];

    // Función para cargar imágenes en el carrusel
    function displayCarouselImages(imageArray) {
        const carouselContainer = document.getElementById("gallery-carousel");
        carouselContainer.innerHTML = ""; // Limpiar el carrusel

        imageArray.forEach((url) => {
            const imgElement = document.createElement("img");
            imgElement.src = url;
            carouselContainer.appendChild(imgElement);
        });
    }

    // Mostrar imágenes en el carrusel al cargar la página
    displayCarouselImages(images);

    // Configurar el carrusel
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const carouselContainer = document.getElementById("gallery-carousel");
        carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Agregar eventos de clic para navegar por el carrusel
    const nextButton = document.getElementById("prev-button");
    const prevButton = document.getElementById("next-button");

    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);

    // Efecto de desplazamiento suave al hacer clic en elementos del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });



     //
     const footerContent = document.getElementById("footer-content");
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();
     footerContent.innerText = `Desarrollado por Ruth, Estudiante de Ingeniería en Sistemas - ${currentYear}`;
});

