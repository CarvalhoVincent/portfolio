// Toggle mobile menu //

function displayMenu() {
    const menu = document.getElementById("primary-navigation");
    const state = document.querySelector(".mobile-nav-toggle");
    const footer = document.querySelector("footer");
    menu.classList.toggle("primary-navigation-toggle");

    if(state.getAttribute("data-visible") === "false") {
        menu.style = "box-shadow: 0px 0px 200px 100vh rgba(0,0,0,0.5);"
        state.style = "background-image: url(./assets/icon-close-menu.svg);";
        state.setAttribute("data-visible", true);
        state.setAttribute("aria-expanded", true);
        footer.style.background = "#000000";
        footer.style.opacity = ".9";
    } else {
        menu.style = "box-shadow: none;"
        state.style = "background-image: url(./assets/icon-hamburger.svg); position: absolute;";
        state.setAttribute("data-visible", false);
        state.setAttribute("aria-expanded", false);
        footer.style.background = "";
        footer.style.opacity = "";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const declineCookies = document.getElementById('decline-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('show');
    }

    function hideCookieBanner() {
        cookieBanner.classList.remove('show');
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 1000); // Correspond à la durée de la transition
    }

    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        hideCookieBanner();
    });

    declineCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        hideCookieBanner();
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!email || !subject || !message) {
        alert('Tous les champs sont requis.');
        event.preventDefault();
    }
});