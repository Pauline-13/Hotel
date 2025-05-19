const sectionElement = document.querySelector("section");
let resultsArray;

fetch("../Json/hebergement.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    resultsIds = json.ids;
    afficheur(resultsIds);
  });

function afficheur(ids) {
  

  for (const id of ids) {
    const chambre = id.nom;
    const image = id.image;
    const info = id.description;

    const divElement = document.createElement("div");
    sectionElement.appendChild(divElement);
    divElement.classList.add("chambre");

    divElement.innerHTML = `
      
        <div>
           <img src="${image}" alt="${chambre}">
           <p><strong>${chambre}</strong></p>
           <p>${info}</p>
        </div>
      
    `;
  }
}
