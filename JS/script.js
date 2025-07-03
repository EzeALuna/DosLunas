 // Toggle menu for mobile
 const menuIcon = document.querySelector('.menu-icon');
 const navLinks = document.querySelector('.nav-links');

 menuIcon.addEventListener('click', () => {
     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
 });

 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
 // Carrusel
 const carousel = document.querySelector('.carousel-inner');
 const items = carousel.querySelectorAll('.carousel-item');
 const prevBtn = document.querySelector('.carousel-control.prev');
 const nextBtn = document.querySelector('.carousel-control.next');
 let currentIndex = 0;

 function showSlide(index) {
     if (index < 0) {
         currentIndex = items.length - 1;
     } else if (index >= items.length) {
         currentIndex = 0;
     } else {
         currentIndex = index;
     }
     carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
 }

 prevBtn.addEventListener('click', (e) => {
     e.preventDefault();
     showSlide(currentIndex - 1);
 });

 nextBtn.addEventListener('click', (e) => {
     e.preventDefault();
     showSlide(currentIndex + 1);
 });

 // Auto-play carrusel
 setInterval(() => {
     showSlide(currentIndex + 1);
 }, 5000);

var cardContainer = document.getElementById('card');

//cambiar color H2
var tituloH2 = document.querySelector('h2');
tituloH2.addEventListener("mouseover",()=>{
        tituloH2.style.color = 'red';
    });

 //Cambiar Fondo
 function FondoOscuro(){
    var Fondo = document.querySelector('body');
    Fondo.style.backgroundColor= 'black';
 }

 //consumo API
 fetch("http://localhost:8080/productos")
  .then(response => response.json())
  .then(productos => {
    mostrarProductosEnLaPantalla(productos);
  })
  .catch(error => console.error(error));

  //ResponseEntity crearProducto
  fetch("http://localhost:8080/productos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(producto)
})
.then(response => response.json())
.then(nuevoProducto => {
  // Manejar la respuesta (e.g., actualizar la lista)
})
.catch(error => console.error(error));

//ResponseEntity<List<producto>>
fetch("http://localhost:8080/productos")
  .then(response => response.json())
  .then(productos => {
    mostrarProductosEnLaPantalla(productos);
  })
  .catch(error => console.error(error));

  //ResponseEntity actualizar
  fetch("http://localhost:8080/productos/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(producto)
})
.then(response => response.json())
.then(productoActualizado => {
  // Manejar la respuesta (e.g., actualizar la lista)
})
.catch(error => console.error(error));

//ResponseEntity eliminar
fetch("http://localhost:8080/productos/1", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  if (response.status === 204) {
    // Manejar la respuesta (e.g., actualizar la lista)
  } else {
    console.error("Error al eliminar el producto");
  }
})
.catch(error => console.error(error));
