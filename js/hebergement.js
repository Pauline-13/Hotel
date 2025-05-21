const sectionElement = document.getElementById("ici");
let resultsIds = [];
let index = 0;
let lastDirection = "right"; // pour savoir quelle animation jouer


fetch("../Json/hebergement.json")
  .then((response) => response.json())
  .then((json) => {
    resultsIds = json.ids;
    initialiserStructure();
    afficherChambre(index);
  });



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
let currentImageIndex = 0; // index de l'image affichée dans la chambre
let currentChambreIndex = 0; // index de la chambre affichée

function afficherChambre(i) {
  currentChambreIndex = i;
  currentImageIndex = 0; // reset image index à chaque nouvelle chambre
  const chambre = resultsIds[i];
  const container = document.getElementById("chambre-container");

  const oldContent = container.querySelector(".chambre-content");

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

      const newContent = creerContenuChambre(chambre, currentImageIndex);
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

    }, 600);
  } else {
    const newContent = creerContenuChambre(chambre, currentImageIndex);
    container.appendChild(newContent);
  }
}

function creerContenuChambre(chambre, imgIndex) {
  const div = document.createElement("div");
  div.classList.add("chambre-content");

  // Ici on prend la bonne image selon imgIndex
  const imageSrc = chambre.images ? chambre.images[imgIndex] : chambre.image;

  div.innerHTML = `
    <img id="image" src="${imageSrc}" alt="${chambre.nom}">
    <div class="p">
      <h1><strong>${chambre.nom}</strong></h1>
      <p>${chambre.description}</p>
    </div>`;

  // Ajouter le clic sur l'image pour changer la photo interne
  const imgElement = div.querySelector("#image");
  if(chambre.images && chambre.images.length > 1) {
    imgElement.style.cursor = "pointer";
    imgElement.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % chambre.images.length;
      imgElement.src = chambre.images[currentImageIndex];
    });
  }

  return div;
}
