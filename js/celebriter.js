const sectionElement = document.getElementById("celebrity");

function afficheur(celebs) {
    for (const celeb of celebs) {
        const name = celeb.name || "Inconnu";

        const divElement = document.createElement("div");
        divElement.classList.add("celebre");

        divElement.innerHTML = `
            <div>
               <p><strong>${name}</strong></p>
            </div>`;
            
            sectionElement.appendChild(divElement);

    };
        
};


fetch("https://api.api-ninjas.com/v1/celebrity?name=elon", {
    method: "GET",
    headers: {  
        'X-Api-Key': 'ONqjzSTwf0RkB9S7y7O3rQ==xBq58h0ypybseNvn'
    }
})
.then((response) => response.json())
.then((celebs) => {
    afficheur(celebs);
});

