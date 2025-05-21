// Navbar
function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav')
    })
}
toggleMenu();


// Fleche footer
  document.querySelector('.fleche_footer').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });











  // Sources Footer
const bouton = document.querySelector('.footer_btn');
const links = document.querySelector('.links_footer');
bouton.addEventListener('click', footerMenu);

function footerMenu() {
  links.classList.toggle('show_links');
}

