const API_KEY = '6a00ead2210d478c9c3125735231404';

const card = document.querySelector('.card');
const btn = document.querySelector(".btn");
const input = document.querySelector(".form-control");




const getWeatherData = async function(city){
    const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}%20&q=${city}&aqi=no`);
    const data = await weather.json();
   
    loading.style.display = "none"

    card.innerHTML = `
    <img src="../img/weather.webp" class="card-img-top" alt="#" style="width: 100px; height: 100px; margin: auto;">
    <div class="card-body">
      <h2 class="card-title m-auto text-center fw-bold" style="font-size: 20px; font-weight: bold; text-align: center;">${data.location.name}, ${data.location.country}</h2>
      <h3 class="card-title m-auto text-center mt-2 fw-bold">${data.current.condition.text}</h3>
      <h5 class="card-text text-center display-5 fw-lighter">Tempratura ${data.current.temp_c} °C</h5>        
    </div>`;
   
}


btn.addEventListener('click',()=>{
  loading.style.display = "block";
  getWeatherData(input.value);
});