//Background
function setRandomBackground() {
    const images = [
      "https://static.vecteezy.com/system/resources/previews/005/592/877/non_2x/abstract-dark-purple-background-overlap-layer-on-dark-space-for-background-design-exclusive-wallpaper-design-for-poster-brochure-presentation-website-etc-vector.jpg","https://images.unsplash.com/photo-1532300086110-7c7d0001c936?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1697475855659-bba2c395dafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1532771098148-525cefe10c23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1712691354063-de032c313995?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://static.vecteezy.com/system/resources/previews/005/585/794/non_2x/abstract-dark-purple-background-overlap-layer-on-dark-space-for-background-design-exclusive-wallpaper-design-for-poster-brochure-presentation-website-etc-vector.jpg","https://images.unsplash.com/photo-1677216794333-c6efad6f23f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = `url(${randomImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw';
    document.body.style.backgroundPosition = 'random';
    // document.body.style.backgroundAttachment = 'Fixed';

  }
  // setRandomBackground();
  // window.addEventListener('load', setRandomBackground);
  const sbutton = document.getElementById('changeBackgroundButton');
  sbutton.addEventListener('click', setRandomBackground);
  
// search-engine

  function submitSearch() {
    const searchEngine = document.getElementById('search-engine').value;
    const searchTerm = document.getElementById('search-term').value;
    
    // Build the search URL based on the chosen engine
    let url;
    if (searchEngine === 'google') {
      url = `https://www.google.com/search?q=${searchTerm}`;
    } else if (searchEngine === 'duckduckgo') {
      url = `https://duckduckgo.com/?q=${searchTerm}`;
    } else if (searchEngine === 'bing') {
      url = `https://www.bing.com/search?q=${searchTerm}`;
    }
    window.open(url, '_blank');
  }

  const searchBar = document.getElementById("search-term");

searchBar.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      submitSearch();
      
    }
});


  
//weather

const apiKey = "8ed7a972613bc71727518d7e9aa0321f";

function getWeather() {
  const city = document.getElementById('city-search').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const location = data.name;
      const temperature = Math.floor(data.main.temp - 273.15);
      const description = data.weather[0].description;

      document.getElementById("location").textContent = location;
      document.getElementById("temperature").textContent = `${temperature}°C`;
      document.getElementById("description").textContent = description;
    })
    .catch(error => {
      console.error(error);
      alert("Error: City not found!");
      window.location.reload()
      
      
    });
    
  };

  const w_search = document.getElementById("city-search");
  w_search.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        getWeather();
        hide_element();
        
      }
  });
    
function hide_element(){  
    document.getElementById("city-search").classList.add("hide")
    document.getElementById("ss-search").classList.add("hide")
  }
  
//time
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
  
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dateString =  now.toLocaleDateString('en-US', optionsDate);
  
    document.getElementById("currentTime").textContent = timeString;
    document.getElementById("currentDate").textContent = dateString;
  }
  
  updateTime();
  setInterval(updateTime, 60000); // Update every minute (60 seconds)

// USD_INR

const currencyURL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jNIT5DiYmNC35NWlLtT5op0VSV9VzsS43zQCZ6H2"; 

function getCurrencyChange() {
  fetch(currencyURL)
    .then(response => response.json())
    .then(data => {
      const currency_option = document.getElementById('currency-option').value
      
      const selectElement = document.getElementById("currency-option");
      const selectedIndex = selectElement.selectedIndex;
      const selectedOption = selectElement.options[selectedIndex];
      const optionText = selectedOption.textContent;
      let currentRate
      if(optionText=="INR"){
        currentRate = data.data.INR;
      }
      else if(optionText=="AUD"){
        currentRate = data.data.AUD
      }
      else if(optionText=="EUR"){
        currentRate = data.data.EUR
      }
      else if(optionText=="CHF"){
        currentRate = data.data.CHF
      }
      else if(optionText=="HKD"){
        currentRate = data.data.HKD
      }
      else if(optionText=="ISK"){
        currentRate = data.data.ISK
      }
      document.getElementById("currency-change").textContent = `CURRENTLY: 1 USD = ${currency_option} ${currentRate}`;
    });
}
getCurrencyChange();


//cryptocurrency

const API_URL = 'https://api.coinranking.com/v2/coins?limit=5&sort=changeDesc'; // Replace if using a different API

async function fetchCryptoData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const topCryptos = data.data.coins;
    displayCryptoRates(topCryptos);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors gracefully, like displaying an error message to the user
  }
}

function displayCryptoRates(cryptos) {
  const cryptoList = document.getElementById('crypto-list');
  cryptoList.innerHTML = ''; // Clear previous content

  cryptos.forEach(crypto => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${crypto.name} (${crypto.symbol}): ${crypto.change}%
    `;
    // listItem.innerHTML.onclick=window.open(`${crypto.coinrankingUrl}`, '_blank')
    cryptoList.appendChild(listItem);
  });
}

fetchCryptoData();


preloader

const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hidden");
});







