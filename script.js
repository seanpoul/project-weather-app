const form = document.getElementById('weatherForm')
const displayData = document.getElementById('displayData')

form.addEventListener('submit', userSubmission)

function userSubmission(e) {
    e.preventDefault()
    userInput()
}

function userInput() {
    const cityInput = document.getElementById('cityInput')
    // console.log(cityInput.value)

    const userLocation = cityInput.value
    getWeatherData(userLocation)
}

async function getWeatherData(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c50f1691bdc695ce44a112080f2d6100`, {
        mode: 'cors'
    });

    const weatherData = await response.json()
    console.log(weatherData)
    processData(weatherData)
}

function processData(weatherData){
    


    
    display()
}

function display() {


    
}
