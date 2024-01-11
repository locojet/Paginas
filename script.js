                   
                   
                   
                   
                   // Funktion für das Anzeigen von Abschnitten. Scroll-effekt 

function showSections() {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250; // Hier den Offset-Wert anpassen
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
}


// Funktion für das Ändern der Hintergrundfarben von Logos und der Navbar
function changeLogoBackground() {
    let sections = document.querySelectorAll("section");
    let cLogo = document.querySelector(".c-logo");
    let centroLogo = document.querySelector(".centro-logo");
    let formLogo = document.querySelector(".form-logo");
    let bars = document.querySelectorAll(".bar");
    let navLinks = document.querySelectorAll(".nav-link"); // Alle .nav-link-Elemente auswählen

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
            // Ändern Sie die Hintergrundfarben von .c-logo, .centro-logo, .form-logo, .bar und .navbar entsprechend
            let backgroundColor = getComputedStyle(sec).backgroundColor;
            cLogo.style.backgroundColor = backgroundColor;
            centroLogo.style.backgroundColor = backgroundColor;
            formLogo.style.backgroundColor = backgroundColor;
            bars.forEach(bar => {
                bar.style.backgroundColor = backgroundColor;
            });
            // Ändern Sie die Schriftfarbe aller .nav-link-Elemente
            navLinks.forEach(navLink => {
                navLink.style.color = backgroundColor; // Schriftfarbe der .nav-link ändern
            });
        } else {
            sec.classList.remove('show-animate');
        }
    });
}

// Event-Handler für das Ändern der Hintergrundfarben von Logos und der Navbar
window.addEventListener('scroll', changeLogoBackground);


// Funktion für Hamburger icon

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// Funktion für das Anzeigen von Abschnitten. Scroll-effekt 
function showSections() {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Anpassung des Offset-Werts
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
}