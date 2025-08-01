

const weatherForm=document.querySelector(".weatherForm")
const cityInput=document.querySelector(".cityInput")
const card=document.querySelector(".card")
const apiKey="cfbb0a66a156a948dcf4f0ca3d0e9a70"


weatherForm.addEventListener("submit", async event=>{

    event.preventDefault()// as form provides auto refresh page
    const city=cityInput.value

    if(city){
        try{
            const weatherData=await getWeatherData(city)
            displayWeatherInfo(weatherData)
        }
        catch(error){
            displayError(error)
        }
    }
    else{
        displayError("Please enter a city")
        // alert("Please enter a correct city name")
    }

})

async function getWeatherData(city){

    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response=await fetch(apiUrl)

    if(!response.ok){
        throw new Error("Could not fetch weather data")
    }

    return await response.json()
    
    // console.log(response)
}

function displayWeatherInfo(data){

    const {name: city,
            main: {temp, humidity},
            weather: [{description, id}] 
          } = data
    
    card.innerHTML=""
    card.style.display="block"
    // console.log(data)

    const cityDisplay=document.createElement("h1")
    const tempDisplay=document.createElement("p")
    const humididtyDisplay=document.createElement("p")
    const descDisplay=document.createElement("p")
    const weatherEmoji=document.createElement("p")

    cityDisplay.textContent=city
    tempDisplay.textContent=`${temp}°C`
    humididtyDisplay.textContent=`Humidity: ${humidity}%`
    descDisplay.textContent=`Description: ${description}`
    weatherEmoji.textContent=`Weather: ${getWeatherEmoji(id)}`

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humididtyDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humididtyDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherEmoji)
}

function getWeatherEmoji(weatherId){

    switch(true){
        case weatherId>=200 && weatherId<300:
            return "⛈️"
        case weatherId>=300 && weatherId<400:
            return "🌧️"
        case weatherId>=500 && weatherId<600:
            return "🌨️"
        case weatherId>=600 && weatherId<=700:
            return "♨️"
        case weatherId>=700 && weatherId<800:
            return "⛅"
        case weatherId===800:
            return "☀️"
        case weatherId>=801 && weatherId<810:
            return "☁️"
        default:
            return "❓"
    }

}


function displayError(message){
    const errorDisplay=document.createElement("p")
    errorDisplay.textContent=message
    errorDisplay.classList.add("errorDisplay")

    card.innerHTML=""
    card.style.display=""
    card.appendChild(errorDisplay)
}






