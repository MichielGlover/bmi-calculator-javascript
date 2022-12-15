//function
// get values
// calculate
//output

//bmi formula weight / height squared * 703

function calculateBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 10000)

document.getElementById('heading').innerHTML = 'Uw BMI is :'
document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)

if (bmi < 18.5) {
    document.getElementById('message').innerHTML = 'U heeft ondergewicht'
} else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'U heeft een gezond gewicht'
} else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById('message').innerHTML = 'U heeft overgewicht'
} else {
    document.getElementById('message').innerHTML = 'U heeft obesitas'
}

}

function reload() {
    window.location.reload()
}