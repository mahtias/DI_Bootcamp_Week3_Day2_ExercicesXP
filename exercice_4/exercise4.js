
//1 Write a JavaScript program to calculate the volume of a sphere. 


// Formula to calculate the volume is : V = 4/3 π r³

// get the form
let Form=document.getElementById('MyForm');
//function to calculate
function Calculate(e){

    e.preventDefault()

//we check the form before send
    let radius = document.getElementById('radius').value
    if (isNaN(radius)) { alert('Please a number for radius')
        return
    }
    radius= Number(radius)
    let volume = 4 / 3 * Math.PI * Math.pow(radius, 3)
    document.getElementById('volume').value = volume.toFixed(3)
    
}
Form.addEventListener('submit', Calculate)