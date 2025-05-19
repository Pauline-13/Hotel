const btn = document.getElementById('btn');

fetch("../Json/restaurant.json")
.then((response) => response.json())

  .then((json) => {
    console.log(json);
    resultsCartes = json.carte;
    afficheur(resultsCartes);
  });
const sectionElement = document.getElementById("dialogue");
sectionElement.style.display = "none";
function afficheur(carte) {
    
    const titre = document.createElement("h2");
    
    titre.innerHTML=`ENTREES :`;
    sectionElement.appendChild(titre);
      carte.entrees.forEach((entree) => {
    const divElement = document.createElement("div");
    divElement.classList.add("entrer");
    
    divElement.innerHTML = `
      <img src="${entree.image}" alt="" />
    <div class="bien">
      <p><strong>${entree.nom}</strong></p>
    
      <p>${entree.description}</p>  <br><br>
      <p>${entree.prix} €</p>
    </div>
    `;
    sectionElement.appendChild(divElement);
  });
    
  const titre2 = document.createElement("h2");
  titre2.innerHTML = `PLATS :`;
  sectionElement.appendChild(titre2);
  carte.plats.forEach((plat) => {
    const divElement = document.createElement("div");
    divElement.classList.add("plat");
    divElement.innerHTML= `
      <img src="${plat.image}" alt="" />
     <div class="bien"> 
       <p><strong>${plat.nom}</strong></p>
       <p>${plat.description}</p>
       <p>${plat.prix} €</p>
      </div>
    `;
    sectionElement.appendChild(divElement);
  });

   const titre3 = document.createElement("h2");
  titre3.innerHTML = `DESSERTS :`;
  sectionElement.appendChild(titre3);
  carte.desserts.forEach((dessert) => {
    const divElement = document.createElement("div");
    divElement.classList.add("dessert");
    divElement.innerHTML= `
    <div>
      <div class="bien">
       <img src="${dessert.image}" alt="" />
       <p><strong>${dessert.nom}</strong></p>
       <p>${dessert.description}</p>
       <p>${dessert.prix} €</p>
      </div>
    </div>
    `;
    sectionElement.appendChild(divElement);
  });
    const titre4 = document.createElement("h2");
  titre4.innerHTML = `BOISSONS :`;
  sectionElement.appendChild(titre4);
  carte.boissons.forEach((boisson) => {
    const divElement = document.createElement("div");
    divElement.classList.add("boisson");
    divElement.innerHTML= `
    <div class="bien"> 
      <img src="${boisson.image}" alt="" />
      <p><strong>${boisson.nom}</strong></p>
      <p>${boisson.description}</p>
      <p>${boisson.prix} €</p>
    </div>
    `;
    sectionElement.appendChild(divElement);
  });

        
        
    
};


function ici() {
sectionElement.style.display = "block";
afficheur(carte)
};