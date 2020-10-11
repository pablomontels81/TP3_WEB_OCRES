
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

  apiWeather
    .fetchThreeDayForcast()
    .then(function(response) {
      //Récupère les données de l'API pour J+1, J+2, J+3
      
      //Jour 1
      const dataJ1 = response.data.list[1];
      
      // On récupère l'information principal
      const mainJ1 = dataJ1.weather[1].main;
      const descriptionJ1 = dataJ1.weather[1].description;
      const tempJ1 = dataJ1.main.temp;
      const iconJ1 = apiWeather.getHTMLElementFromIcon(dataJ1.weather[1].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-1').innerHTML = mainJ1;
      document.getElementById('today-forecast-more-info-1').innerHTML = descriptionJ1;
      document.getElementById('icon-weather-container-1').innerHTML = iconJ1;
      document.getElementById('today-forecast-temp-1').innerHTML = `${tempJ1}°C`;

      //Jour 2
      const dataJ2 = response.data.list[2];

      // On récupère l'information principal
      const mainJ2 = dataJ2.weather[2].main;
      const descriptionJ2 = dataJ2.weather[2].description;
      const tempJ2 = dataJ2.main.temp;
      const iconJ2 = apiWeather.getHTMLElementFromIcon(dataJ2.weather[2].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-2').innerHTML = mainJ2;
      document.getElementById('today-forecast-more-info-2').innerHTML = descriptionJ2;
      document.getElementById('icon-weather-container-2').innerHTML = iconJ2;
      document.getElementById('today-forecast-temp-2').innerHTML = `${tempJ2}°C`;

      //Jour 3
      const dataJ3 = response.data.list[3];

      // On récupère l'information principal
      const mainJ3 = dataJ3.weather[3].main;
      const descriptionJ3 = dataJ3.weather[3].description;
      const tempJ3 = dataJ3.main.temp;
      const iconJ3 = apiWeather.getHTMLElementFromIcon(dataJ3.weather[3].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-3').innerHTML = mainJ3;
      document.getElementById('today-forecast-more-info-3').innerHTML = descriptionJ3;
      document.getElementById('icon-weather-container-3').innerHTML = iconJ3;
      document.getElementById('today-forecast-temp-3').innerHTML = `${tempJ3}°C`;
    })
    
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

// Fonction appelée lors du click du bouton
function actualisation() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById('city-input').value);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });


    apiWeather
    .fetchThreeDayForcast()
    .then(function(response) {
      //Récupère les données de l'API pour J+1, J+2, J+3
      
      //Jour 1
      const dataJ1 = response.data.list[0];

      // On récupère l'information principal
      const mainJ1 = dataJ1.weather[0].main;
      const descriptionJ1 = dataJ1.weather[0].description;
      const tempJ1 = dataJ1.main.temp;
      const iconJ1 = apiWeather.getHTMLElementFromIcon(dataJ1.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-1').innerHTML = mainJ1;
      document.getElementById('today-forecast-more-info-1').innerHTML = descriptionJ1;
      document.getElementById('icon-weather-container-1').innerHTML = iconJ1;
      document.getElementById('today-forecast-temp-1').innerHTML = `${tempJ1}°C`;

      //Jour 2
      const dataJ2 = response.data.list[1];

      // On récupère l'information principal
      const mainJ2 = dataJ2.weather[1].main;
      const descriptionJ2 = dataJ2.weather[1].description;
      const tempJ2 = dataJ2.main.temp;
      const iconJ2 = apiWeather.getHTMLElementFromIcon(dataJ2.weather[1].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-2').innerHTML = mainJ2;
      document.getElementById('today-forecast-more-info-2').innerHTML = descriptionJ2;
      document.getElementById('icon-weather-container-2').innerHTML = iconJ2;
      document.getElementById('today-forecast-temp-2').innerHTML = `${tempJ2}°C`;

      //Jour 3
      const dataJ3 = response.data.list[2];

      // On récupère l'information principal
      const mainJ3 = dataJ3.weather[2].main;
      const descriptionJ3 = dataJ3.weather[2].description;
      const tempJ3 = dataJ3.main.temp;
      const iconJ3 = apiWeather.getHTMLElementFromIcon(dataJ3.weather[2].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main-3').innerHTML = mainJ3;
      document.getElementById('today-forecast-more-info-3').innerHTML = descriptionJ3;
      document.getElementById('icon-weather-container-3').innerHTML = iconJ3;
      document.getElementById('today-forecast-temp-3').innerHTML = `${tempJ3}°C`;
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
