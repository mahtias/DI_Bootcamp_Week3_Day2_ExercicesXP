// À l'aide d'une propriété DOM, récupérez le h1 et console.log.

let recoverTitle = document.querySelector("h1").innerHTML;

console.log(recoverTitle);

// À l'aide des méthodes DOM, supprimez le dernier paragraphe de la <article> balise

let deletePara = document.querySelector("p:last-child").remove()
console.log(deletePara);

/* Ajoutez un écouteur d'événement qui changera la couleur 
d'arrière-plan du h2 en rouge, lorsqu'il est cliqué dessus.
*/

let changeColorBackTitle = document.querySelector("h2")

changeColorBackTitle.addEventListener("click", colorBack)

function colorBack() {
    changeColorBackTitle.style.backgroundColor = "red"
}

/*
Ajoutez un écouteur d'événement qui masquera le h3 lorsqu'il est cliqué
(utilisez la propriété display:none )
*/

let hideTitle = document.querySelector("h3")

hideTitle.addEventListener("click", hideTitleH)

function hideTitleH() {
    hideTitle.style.display = "none"
}

/*
Ajoutez un <button>au fichier HTML qui, une fois cliqué dessus, 
devrait mettre le texte de tous les paragraphes en gras.
*/

let boldText = document.querySelector("button")

boldText.addEventListener("click", allTextBold)

function allTextBold() {
    
    let boldPara = document.querySelector("article")
    boldPara.style.fontWeight = "bold" 
}

/*
Lorsque vous survolez le h1, définissez la taille de 
la police sur une taille de pixel aléatoire comprise entre 0 et 100.
*/

let randomTitle = document.querySelector("h1")
randomTitle.addEventListener("mousemove", hideTitleH)

function hideTitleH() { 
    let variRandom = Math.floor(Math.random() * 100)
    
    randomTitle.style.fontSize = `${variRandom}px`
}

/*
BONUS : lorsque vous survolez le 2e paragraphe, il devrait 
s'estomper (consultez "fade css animation" sur Google)
*/

