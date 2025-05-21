// fetch("../json/service.json")
// .then((response) => response.json())
// .then((json) => console.log(json))

const sectionElement = document.getElementById("json");
let resultsServices;

fetch("../Json/service.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    resultsServices = json.services;
    afficheur(resultsServices);
  });

function afficheur(services) {
    
    
    for (const service of services) {
        const nom = service.nom;
        const image = service.image;
        const info = service.description;
        const horaire = service.horaire;
        
        const divElement = document.createElement("div");
       
        divElement.classList.add("service");
        
        divElement.innerHTML = `
        
        <div class="container_section">
        <img class="image_service" src="${image}" alt="">
        
        <div class="container_txt">
        <h2><strong>${nom}</strong></h2>
        <hr>
        <p class="txt_service">${info}</p>
        <p class="txt_service">${horaire}</p>
        </div>

        </div>
        
        `; sectionElement.appendChild(divElement);
    }
}

