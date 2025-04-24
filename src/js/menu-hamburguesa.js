// Codigo para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuPresionado = document.querySelector('.menu-presionado');
    const navbarLinks = document.querySelector('.navbar-links');
    menuPresionado.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
