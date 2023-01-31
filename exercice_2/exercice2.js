// Récupérez le formulaire et consolez-le.

let form = document.forms[0]
console.log(form);

// Récupérez les entrées par leur identifiant et console.log les.

let elem1 = document.getElementById("fname")
console.log(elem1)

let elem2 = document.getElementById("lname")
console.log(elem2)

let elem3 = document.getElementById("submit")
console.log(elem3)

// Récupérez les entrées par leur name attribut et console.log les.

let elemByInSide1 = form.elements.fname
let elemByInSide2 = form.elements.lname

console.log(elemByInSide1,elemByInSide2);

/*
Lorsque l'utilisateur soumet le formulaire (c'est-à-dire submitécouteur d'événement)
utiliser event.preventDefault(), pourquoi ?
obtenir les valeurs des balises d'entrée,
assurez-vous qu'ils ne sont pas vides,
créer une livaleur par entrée,
puis ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form.
*/

let elemForm = document.querySelector("form")
let button = document.querySelector("sumit")

button.addEventListener("click", sendGo)
// sendlastName.addEventListener("click",sendGo2)

function sendGo(e){
let first = document.querySelector(["name=fname"])
let last = document.querySelector(["name=lname"])
    console.log(button);
}
