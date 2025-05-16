const sectionElement = document.querySelector("body");
let resultsArray;

fetch("../json/hebergement.json")
.then((response) => response.json())
.then((json) => {
    console.log(json);
    resultsArray = json.results;

    afficheur(resultsArray);
  });
    
function afficheur(ids) {
  Element.innerHTML = "";

  for (const id of ids) {
    const chambre = id.nom;
    const image = id.image;
    const info = id.description;
    const divElement = document.createElement("div");
    body.appendChild(divElement);
    divElement.classList("active");
    divElement.innerHTML = `
    <section>
      <div>
         <img src="${image}">
         <p><strong>${chambre}</strong></p>
         <p><strong>${info}</strong></p>
      </div>
    </section>
    `;
  }
};