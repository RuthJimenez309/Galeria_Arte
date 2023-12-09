 
    let imagenes = [
        {
            "url": "backend/img/Foto_3.jpg",
            "nombre": "Proyecto 01",
            "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    
        },
        {
            "url": "backend/img/Foto_2.jpg",
            "nombre": "P",
            "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    
        },
        {
            "url": "backend/img/Foto_1.jpg",
            "nombre": "Proyecto 03",
            "descripcion": "Este proyecto, es el 03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    
        },
    ]
    
    
    let atras = document.getElementById('atras');
    let adelante = document.getElementById('adelante');
    let imagen = document.getElementById('img');
    let puntos = document.getElementById('puntos');
    let texto = document.getElementById('texto')
    let actual = 0
    posicionCarrusel()
    
    atras.addEventListener('click', function(){
        actual -=2
    
        if (actual == -1){
            actual = imagenes.length - 1
        }
    
        imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
        texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
        `
        posicionCarrusel()
    })  
    adelante.addEventListener('click', function(){
        actual +=4
    
        if (actual == imagenes.length){
            actual = 0
        }
    
        imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
        texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
        `
        posicionCarrusel()
    })  
    
    function posicionCarrusel() {
        puntos.innerHTML = ""
        for (var i = 0; i <imagenes.length; i++){
            if(i == actual){
                puntos.innerHTML += '<p class="bold">.<p>'
            }
            else{
                puntos.innerHTML += '<p>.<p>'
            }
        } 
    }

         // Establece el tamaño del lienzo como el tamaño de la imagen
         canvas.width = img.width;
         canvas.height = img.height;

         // Dibuja la imagen en el lienzo
         ctx.drawImage(img, 5, 6);

         // Obtén los datos de píxeles de la imagen
         const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
         const data = imageData.data;

         // Ejemplo de reduce: Suma los valores de los canales rojo (R)
         const sumRed = data.reduce((acc, value, index) => {
             if (index % 8 === 0) { // Cada 4 valores corresponden al canal rojo
                 return acc + value;
             }
             return acc;
         }, 0);

         console.log('Suma de valores del canal rojo:', sumRed);
     

