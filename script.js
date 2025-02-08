fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=your-api-key")
    .then(response => response.json())
    .then(data => console.log(data));
