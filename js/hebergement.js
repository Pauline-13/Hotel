const sectionElement = document.getElementById("ici");
let resultsIds = [];
let index = 0;
let lastDirection = "right";

const currentImageIndexes = {};

fetch("../Json/hebergement.json")
  .then(response => response.json())
  .then(json => {
    resultsIds = json.ids || [];
    
    
    initialiserStructure();
    afficherChambre(index);
  })
  .catch(err => console.error("Erreur chargement JSON :", err));

function initialiserStructure() {
  const containerChambre = document.createElement("div");
  containerChambre.id = "chambre-container";
  sectionElement.appendChild(containerChambre);

 
  const btnGauche = document.createElement("button");
  btnGauche.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
  btnGauche.classList.add("fleche-gauche");
  btnGauche.addEventListener("click", () => {
    lastDirection = "left";
    index = (index - 1 + resultsIds.length) % resultsIds.length;
    afficherChambre(index);
  });
  sectionElement.appendChild(btnGauche);

 
  const btnDroite = document.createElement("button");
  btnDroite.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
  btnDroite.classList.add("fleche-droite");
  btnDroite.addEventListener("click", () => {
    lastDirection = "right";
    index = (index + 1) % resultsIds.length;
    afficherChambre(index);
  });
  sectionElement.appendChild(btnDroite);
}

function afficherChambre(i) {
  const chambre = resultsIds[i];
  const container = document.getElementById("chambre-container");
  const oldContent = container.querySelector(".chambre-content");

  if (!(chambre.nom in currentImageIndexes)) {
    currentImageIndexes[chambre.nom] = 0;
  }

  if (oldContent) {
    oldContent.classList.remove("slide-in-left", "slide-in-right", "slide-in-left-active", "slide-in-right-active");
    if (lastDirection === "right") {
      oldContent.classList.add("slide-out-left");
    } else {
      oldContent.classList.add("slide-out-right");
    }

    setTimeout(() => {
      if (oldContent && oldContent.parentNode === container) {
        container.removeChild(oldContent);
      }

      const newContent = creerContenuChambre(chambre);
      container.appendChild(newContent);

      if (lastDirection === "right") {
        newContent.classList.add("slide-in-right");
      } else {
        newContent.classList.add("slide-in-left");
      }

     
      void newContent.offsetWidth;

      if (lastDirection === "right") {
        newContent.classList.add("slide-in-right-active");
      } else {
        newContent.classList.add("slide-in-left-active");
      }

      setTimeout(() => {
        newContent.classList.remove("slide-in-left", "slide-in-right", "slide-in-left-active", "slide-in-right-active");
      }, 600);

     
      const img = newContent.querySelector("img.chambre-image");
      if (img) {
        const images = chambre.images && chambre.images.length > 0 ? chambre.images : [chambre.image];
        if (images.length > 1) {
          img.style.cursor = "pointer";
          img.onclick = () => {
            currentImageIndexes[chambre.nom] = (currentImageIndexes[chambre.nom] + 1) % images.length;
            img.src = images[currentImageIndexes[chambre.nom]];
          };
        } else {
          img.style.cursor = "default";
          img.onclick = null;
        }
      }
    }, 600);
  } else {
    const newContent = creerContenuChambre(chambre);
    container.appendChild(newContent);

  
    const img = newContent.querySelector("img.chambre-image");
    if (img) {
      const images = chambre.images && chambre.images.length > 0 ? chambre.images : [chambre.image];
      if (images.length > 1) {
        img.style.cursor = "pointer";
        img.onclick = () => {
          currentImageIndexes[chambre.nom] = (currentImageIndexes[chambre.nom] + 1) % images.length;
          img.src = images[currentImageIndexes[chambre.nom]];
        };
      } else {
        img.style.cursor = "default";
        img.onclick = null;
      }
    }
  }
}

function creerContenuChambre(chambre) {
  const div = document.createElement("div");
  div.classList.add("chambre-content");

  const images = chambre.images && chambre.images.length > 0 ? chambre.images : [chambre.image];
  if (!(chambre.nom in currentImageIndexes)) {
    currentImageIndexes[chambre.nom] = 0;
  }
  const imgIndex = currentImageIndexes[chambre.nom];
  const imageSrc = images[imgIndex % images.length];

  div.innerHTML = `
    <img class="chambre-image" src="${imageSrc}" alt="${chambre.nom}" data-chambre="${chambre.nom}" style="cursor:${images.length > 1 ? 'pointer' : 'default'};">
    <div class="p">
      <h2><strong>${chambre.nom}</strong></h2>
      <hr>
      <p>${chambre.description}</p>
    </div>`;

  return div;
}


// Navbar
function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav')
    })
}
toggleMenu();


// Sources Footer
const bouton = document.querySelector('.footer_btn');
const links = document.querySelector('.links_footer');
bouton.addEventListener('click', footerMenu);

function footerMenu() {
  links.classList.toggle('show_links');
}


// Fleche footer
  document.querySelector('.fleche_footer').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  