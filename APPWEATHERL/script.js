// Define your API key from OpenWeatherMap
const API_KEY = 'e8150981ffd6db128e95e6f917c553a4'; // Replace with your actual API key

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location-input').value;
    getWeather(location);
});

function getWeather(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    document.getElementById('location').textContent = data.name + ', ' + data.sys.country;
    document.getElementById('temperature').textContent = data.main.temp + ' °C';
    document.getElementById('description').textContent = data.weather[0].description;
    
    document.getElementById('weather-info').style.display = 'block';
}
