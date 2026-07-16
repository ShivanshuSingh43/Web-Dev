const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("Clicked");

    const city = document.getElementById("city").value;
    console.log(city);
    
    const apikey = "b008a9024e66268370701da30cca3347";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    console.log(url);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)}°C`
            document.getElementById('weather').innerHTML = data.weather[0].main
            document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
                
            const windKmh = (data.wind.speed * 3.6).toFixed(1)
            document.getElementById('wind').innerHTML = `${Math.round(data.wind.speed)} km/h`

            const city = data.name;
            const country = data.sys.country;

            document.getElementById('city-name').innerHTML = `${city}, ${country}`
            
        })
            .catch((error) => {
                console.log(error);
        });
});
