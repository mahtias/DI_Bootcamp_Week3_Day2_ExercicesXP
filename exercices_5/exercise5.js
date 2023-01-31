
let systemSolar = ["Earth"]

let makePlanet=document.getElementsByTagName("section")[0]
systemSolar.forEach((element )=> {

        //We create a div for each planet
        let creatDiv=document.createElement('div')

        //We add three class to each planet define in the html file
        creatDiv.classList.add("planet","couleur",element);

        //we append each planet to the section
        makePlanet.appendChild(creatDiv)
        
        //We change the text content to put a name view on the planet
        creatDiv.textContent=element
});


// 1. Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.

let makeObject=document.querySelector('div')


// pour click
makeObject.addEventListener('click', () => {
    makeObject.style.backgroundColor = '#fff'
})



// pour mouseover

makeObject.addEventListener('mouseover', () => {
    makeObject.style.backgroundColor = 'yellow'
    makeObject.style.color = 'black'
})



// pour mouseout
makeObject.addEventListener('mouseout', () => {
    makeObject.style.backgroundColor = 'orange'

})

// pour dblclick
makeObject.addEventListener('dblclick', () => {
    makeObject.style.backgroundColor = 'blue'
    makeObject.style.fontSize = '25pt'
}) 