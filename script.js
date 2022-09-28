const form = document.getElementById('weatherForm')

form.addEventListener('submit', userSubmission)

function userSubmission(e) {
    e.preventDefault()
    userInput()
}

function userInput() {
    const cityInput = document.getElementById('cityInput')
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

function processData(weatherData) {
    const datum = {
        temperature: Math.round(weatherData.main.feels_like - 273) + " °C",
        weather: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        wind: (Math.round(weatherData.wind.speed * 1.85 * 10) / 10) + " kms",
        sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' }),
        sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' }),
        // country: weatherData.sys.country
    }
    display(datum)
}

function display(datum) {
    const displayData = document.getElementById('displayData')

    let temperatureData = document.createElement('div')
    // let weatherData = document.createElement('div')
    let descriptionData = document.createElement('div')
    let windData = document.createElement('div')
    let sunriseData = document.createElement('div')
    let sunsetData = document.createElement('div')

    displayData.appendChild(temperatureData)
    // displayData.appendChild(weatherData)
    displayData.appendChild(descriptionData)
    displayData.appendChild(windData)
    displayData.appendChild(sunriseData)
    displayData.appendChild(sunsetData)

    let weatherDescription = datum.description
    let formattedWeather = weatherDescription[0].toUpperCase() + weatherDescription.slice(1).toLowerCase()

    temperatureData.textContent = "Temperature: " + datum.temperature
    // weatherData.textContent = datum.weather
    descriptionData.textContent = "Weather: " + formattedWeather
    windData.textContent = "Wind speed: " + datum.wind
    sunriseData.textContent = "Sunrise: " + datum.sunrise
    sunsetData.textContent = "Sunset: " + datum.sunset
}