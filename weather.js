fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=21.16&lon=86.85&appid=09796eed5aac8e2b61d85550e8d833fd&units=metric'
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
  
      const temperature = document.getElementById("temperature");
      const icon = document.getElementById("weatherIcon");
  
      temperature.textContent = "Temperature: " + Math.round(data.main.temp) + " \u00B0C";

            
      const customIcons = {
        '01d': 'sun.png',
        '01n': 'moon.png',
        '02d': 'cloudsun.png',
        '02n': 'cloudmoon.png',
        '03d': 'cloudsun.png',
        '03n': 'cloudmoon.png',
        '09d': 'rain.png',
        '09n': 'rain.png',
        '10d': 'rain.png',
        '10n': 'rain.png',
      };
  
      const iconCode = data.weather[0].icon;
      const iconFile = customIcons[iconCode] || 'sun.png';
      
      icon.src = `LogoAlters/Icons/API/${iconFile}`;
      icon.alt = data.weather[0].description;

        

    });
  