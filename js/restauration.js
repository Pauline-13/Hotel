
fetch("../Json/restaurant.json")
.then((response) => response.json())

  .then((json) => {
    console.log(json);
    resultsCartes = json.carte;
    afficheur(resultsCartes);
  });
let sectionElement = document.getElementById("dialogue_carte");


function afficheur(carte) {
    sectionElement.innerHTML="";
    const titre = document.createElement("h2");
    
    titre.innerHTML=`ENTRÉES :`;
    sectionElement.appendChild(titre);
    carte.entrees.forEach((entree) => {
    const divElement = document.createElement("div");
    divElement.classList.add("entrer");
    
    divElement.innerHTML = `
      <img src="${entree.image}" alt="" />
    <div class="bien">
      <p><strong>${entree.nom}</strong></p>
    <br><br>
      <p>${entree.description}</p>  <br>
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
       <p><strong>${plat.nom}</strong></p><br><br>
       <p>${plat.description}</p><br>
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
    
    <img src="${dessert.image}" alt="" />
    <div class="bien">
       <p><strong>${dessert.nom}</strong></p><br><br>
       <p>${dessert.description}</p><br>
       <p>${dessert.prix} €</p>
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
    <img src="${boisson.image}" alt="" />
    <div class="bien"> 
      <p><strong>${boisson.nom}</strong></p><br><br>
      <p>${boisson.description}</p><br>
      <p>${boisson.prix} €</p>
    </div>
    `;
    sectionElement.appendChild(divElement);
  });

        
        
    
};

const dialogue = document.getElementById("dialogue");

// Ouvre le dialogue
function ouvrirDialogue() {
  if (!dialogue.open) {
    dialogue.showModal();
   
  } 
  if (resultsCartes) {
    afficheur(resultsCartes);
  }
};

// Ferme le dialogue
function fermerDialogue() {
  dialogue.close();
 };

// Ferme le dialogue quand on clique à l'extérieur
dialogue.addEventListener("click", function (event) {
  const rect = dialogue.getBoundingClientRect();
  const clickedInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!clickedInDialog) {
    fermerDialogue();
  }
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

