/*Funcion header toma color al bajar*/ 
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 10) {
        header.style.backgroundColor = "rgba(82, 59, 47, 0.6)"; // Cambia el color del header
    } else {
        header.style.backgroundColor = "rgba(241, 247, 235, 0)"; // Color original
    }
});

/*funcion boton toogle para abrir menu busqueda*/ 
const toggleBtn = document.querySelector('.toggleButton');
const toggleBtnIcon = document.querySelector('.toggleButton i');
const dropDownMenu = document.querySelector('.dropedDownMenu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};




/*Funcion boton sobre mi*/
const scrollButton = document.getElementById('aboutMeBtn');
const targetSection = document.querySelector('.aboutMe');

// Agregar evento click al botón
scrollButton.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});


const scrollButtonaboutDwn = document.getElementById('aboutMeBtnDwn');


// Agregar evento click al botón
scrollButtonaboutDwn.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});






/*Funcion boton inicio*/ 
const scrollButtonHome = document.getElementById('homeBtn');
const targetSectionHome = document.querySelector('.presentation');

// Agregar evento click al botón
scrollButtonHome.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionHome.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});

const scrollButtonHomeDwn = document.getElementById('homeBtnDwn');

// Agregar evento click al botón
scrollButtonHomeDwn.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionHome.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});


/*Funcion boton galeria*/ 
const scrollButtonGalery = document.getElementById('galeryBtn');
const targetSectionGalery = document.querySelector('.carousel');

// Agregar evento click al botón
scrollButtonGalery.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionGalery.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});

const scrollButtonGaleryDwn = document.getElementById('galeryBtnDwn');

// Agregar evento click al botón
scrollButtonGaleryDwn.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionGalery.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});


/*Funcion boton cursos*/ 
const scrollButtonCourse = document.getElementById('courseBtn');
const targetSectionCourse = document.querySelector('.courses');

// Agregar evento click al botón
scrollButtonCourse.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionCourse.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});

const scrollButtonCourseDwn = document.getElementById('courseBtnDwn');
// Agregar evento click al botón
scrollButtonCourseDwn.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionCourse.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});


/*Funcion boton contacto*/ 
const scrollButtonContact = document.getElementById('button-contact');
const targetSectionContact = document.querySelector('.contact');

// Agregar evento click al botón
scrollButtonContact.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionContact.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});

const scrollButtonContactDwn = document.getElementById('button-contact-droped');
// Agregar evento click al botón
scrollButtonContactDwn.addEventListener('click', (event) => {
    event.preventDefault();
    targetSectionContact.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});


/*KnowMeBtn funcionalidad*/ 

const scrollButtonKnowMe = document.getElementById('knowMeBtn');


// Agregar evento click al botón
scrollButtonKnowMe.addEventListener('click', (event) => {
    event.preventDefault();
    targetSection.scrollIntoView({
        behavior: 'smooth', // Desplazamiento suave
        block: 'start',     // Alinea al inicio de la sección
    });
});


/*Funcion carrusel*/ 

const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');
const track = document.querySelector('#track');
const carrusels = document.querySelectorAll('.carrusel');

let currentIndex = 0; // Índice actual del carrusel
const totalItems = carrusels.length; // Total de elementos en el carrusel

// Evento para el botón "Prev"
prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    moveCarousel('prev');
});

// Evento para el botón "Next"
nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    moveCarousel('next');
});

// Función para mover el carrusel
function moveCarousel(direction) {
    const carruselWidth = carrusels[0].offsetWidth; // Ancho de un carrusel

    if (direction === 'prev') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    } else {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    }

    // Actualizar la posición del track usando transform
    const translateX = -(currentIndex * carruselWidth);
    track.style.transform = `translateX(${translateX}px)`;
    track.style.transition = 'transform 0.5s ease-in-out';
}

  