const apikey = "3265874a2c77ae4a04bb96236a642d2f";

let serchIcon = document.querySelector("form i");
let locationInput = document.querySelector("form input")
let locationCity  = document.querySelector(".city");
let celsiusDegree = document.querySelector(".celsius span");
let humidity = document.querySelector(".hum");
let windSpeed = document.querySelector(".wind-speed span");
let today = document.querySelector(".today");
let weatherShow = document.querySelector(".now");
let forms = document.querySelector("form")

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    weatherDetails(respData);
    // console.log(respData)
}

function weatherDetails(data){
    let cityData = data.name
    console.log(cityData)
    locationCity.innerHTML =cityData;
    let humidityData = data.main.humidity;
    console.log(humidityData)
    humidity.innerHTML = humidityData;
    let windData = data.wind.speed *3.4;
    console.log(windData)
    windSpeed.innerHTML = `${windData.toFixed(1)} Km/h`
    let degreeData = data.main.temp - 273.15
    console.log(degreeData)
    celsiusDegree.innerHTML = Math.floor(degreeData)
    weatherShow.innerHTML =`${data.weather[0].main}`
}

serchIcon.onclick = function(){
    if(locationInput.value){
        const city = locationInput.value;
        getWeatherByLocation(city);
        locationInput.focus()
    }else{
        locationInput.focus()
    }
}

forms.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = locationInput.value;
    if (city) {
        getWeatherByLocation(city);
    }
});




