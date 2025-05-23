const sectionElement = document.getElementById("celebrity");

let celebsData = null;
let imagesData = null;

// Fonction pour afficher une fois que les deux fetch sont prêts
function tryAfficheur() {
    if (celebsData && imagesData) {
        afficheur(celebsData, imagesData);
    }
}

function afficheur(celebs, imagesMap) {
    for (const celeb of celebs) {
        const name = celeb.name || "Inconnu";
        const lowerName = name.toLowerCase();
        const celebData = imagesMap[lowerName];
        const imageURL = celebData?.image || "images/default.jpg";
        const avis = celebData?.avis || "";

        const divElement = document.createElement("div");
        divElement.classList.add("celebre");

        divElement.innerHTML = `
            <div id="celebrite-content">
                <img src="${imageURL}" alt="${name}">
                <p class="nom"><strong>${name}</strong></p>
                ${avis ? `<p class="avis">${avis}</p>` : ""}
            </div>`;

        sectionElement.appendChild(divElement);
    }
}

// Fetch pour les images
fetch("../Json/images_celebrite.json")
    .then((response) => response.json())
    .then((data) => {
        imagesData = data;
        tryAfficheur(); // On essaye d’afficher (si celebsData est prêt)
    });

// Fetch pour les célébrités
fetch("https://api.api-ninjas.com/v1/celebrity?name=elon", {
    method: "GET",
    headers: {  
        'X-Api-Key': 'ONqjzSTwf0RkB9S7y7O3rQ==xBq58h0ypybseNvn'
    }
})
.then((response) => response.json())
.then((data) => {
    celebsData = data;
    tryAfficheur(); // On essaye d’afficher (si imagesData est prêt)
});





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



