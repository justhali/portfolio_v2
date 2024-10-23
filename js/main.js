const mainNav = document.querySelector(".menu-responsive");
const menu = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.menu-close');
const xpNav = document.querySelectorAll('.exp__nav ul li');
const xpCards = document.querySelectorAll('.exp__cards .card');
const projectNav = document.querySelectorAll('.project__nav ul li')
const projectCards = document.querySelectorAll('.project__card')
const BtnMission = document.querySelectorAll("button.mission");
const BtnProgram = document.querySelector("button.program.webdesign");
const content = document.querySelectorAll(".card__body");
const themeSwitch = document.querySelector("#theme-switch");

// DARK THEME
const isDarkTheme = localStorage.getItem('darkmode') === 'true';

if (isDarkTheme) {
    document.body.classList.add('darkmode');
}

themeSwitch.addEventListener('click', () => {

    document.body.classList.toggle('darkmode');

    const isCurrentlyDark = document.body.classList.contains('darkmode');
    localStorage.setItem('darkmode, isCurrentlyDark');
});

// NAVIGATION - HEADER
function toggleMenu() {
    menu.classList.toggle('show');
    const isMenuOpen = menu.classList.contains('show');
    mainNav.setAttribute('aria-expanded', isMenuOpen); // Mise à jour de l'accessibilité
}

// NAVIGATION - EXPERIENCE
function filterCards(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")

    xpCards.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name) {
            card.classList.remove("hide")
        }
    })

    // NAVIGATION - PROJETS
    projectCards.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name) {
            card.classList.remove("hide")
        }
    })
}
function displayTasksMission(e) {
    const button = e.target;
    const cardBody = button.closest('.card').querySelector('.card__body');
    cardBody.classList.toggle('open');
}

// FORMULAIRE EMAIL
function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = encodeURIComponent("Nouveau message de " + name);
    var body = encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    var mailtoLink = "mailto:halima.ah@gmail.com?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
}

mainNav.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
BtnProgram.addEventListener("click", displayTasksMission);
xpNav.forEach(button => button.addEventListener("click", filterCards));
projectNav.forEach(button => button.addEventListener("click", filterCards));
BtnMission.forEach(button => button.addEventListener("click", displayTasksMission));
