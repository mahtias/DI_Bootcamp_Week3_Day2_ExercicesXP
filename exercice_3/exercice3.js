// Déclarez une variable globale nommée allBoldItems.

/* Créez une fonction appelée getBold_items()qui ne prend aucun paramètre. Cette fonction doit
collecter tous les éléments en gras à l'intérieur du paragraphe et les affecter à la allBoldItems variable.
*/
// Créez une fonction appelée highlight()qui change la couleur de tout le texte en gras en bleu.


let allBoldItems = ""
document.body.onload = getBold_items
function getBold_items() {
    let recoverPara = document.querySelectorAll("strong")
    recoverPara.forEach(allBoldItems => {
        console.log(allBoldItems.textContent);
    });
    
    // console.log(recoverPara);
}


function highlight() {
    allBoldItems = document.querySelectorAll("p")
    allBoldItems.style.background = "blue"

}