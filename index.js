const apikey = "f50b0d3e4b04eb72034b7806fefa48f2";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=metric&appid=${apikey}`;

async function checkweather() {
    const response = await fetch(apiurl);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city-name").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + " °C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " m/s";
    document.querySelector(".date").innerHTML = new Date(data.dt * 1000).toLocaleDateString();

}

checkweather();
