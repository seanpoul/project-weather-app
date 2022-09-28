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
    processData(weatherData)
}

function processData(weatherData) {
    const datum = {
        temperature: Math.round(weatherData.main.feels_like - 273),
        weather: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        wind: Math.round(weatherData.wind.speed * 1.85 * 10) / 10,
        sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' }),
        sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' })
    }


    console.log(weatherData)
    console.log(weatherData.weather[0].main)
    console.log(weatherData.weather[0].description)

    display()
}

function display() {



}
