const sectionElement = document.getElementById("ici");
let resultsIds = [];
let index = 0;

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
  
  btnGauche.innerHTML= `
 <i class="fa-solid fa-arrow-left"></i>`
  btnGauche.classList.add("fleche-gauche");
  btnGauche.addEventListener("click", () => {
    index = (index - 1 + resultsIds.length) % resultsIds.length;
    afficherChambre(index);
  });
  sectionElement.appendChild(btnGauche);

  const btnDroite = document.createElement("button");
 
  btnDroite.innerHTML= `
  <i class="fa-solid fa-arrow-right"></i>`
  btnDroite.classList.add("fleche-droite");
  btnDroite.addEventListener("click", () => {
    index = (index + 1) % resultsIds.length;
    afficherChambre(index);
  });
  sectionElement.appendChild(btnDroite);
}

function afficherChambre(i) {
  const chambre = resultsIds[i];
  const container = document.getElementById("chambre-container");

  container.innerHTML = `
    
      <img id="image" src="${chambre.image}" alt="">

      <div class="p">
        
        <h1><strong>${chambre.nom}</strong></h1>
        <p>${chambre.description}</p>
       
      </div>`;
}

