import { API_key, base_URL, getWeather } from "./weather";

const app = document.querySelector("#app");
const form = document.querySelector("form");
const input = document.querySelector("input");

const getData = async (city) => {
  let url = getWeather(city, API_key);

  try {
    let res = await fetch(`${base_URL}${url}`);
    let data = await res.json();

    console.log(data);

    app.innerHTML = `
      <div class="flex justify-center items-center mt-10 px-4">
  <div
    class="w-full max-w-3xl rounded-3xl border border-white/20
           bg-white/10 backdrop-blur-xl shadow-2xl
           p-8 md:p-10 text-white"
  >
    
    <div class="flex items-center justify-between mb-8">
      <div>
        <p class="text-sm text-white/60 mb-1">Current Weather</p>

        <h1 class="text-4xl md:text-5xl font-bold">
          ${data.name}
        </h1>
      </div>

      <div class="text-6xl">
        ☀️
      </div>
    </div>

    
    <div class="flex flex-col md:flex-row items-center justify-between gap-8">

      <div class="text-center">
        <p class="text-7xl md:text-8xl font-bold">
          ${Math.round(data.main.temp)}°
        </p>

        <p class="text-white/70 text-lg">
          Celsius
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 w-full md:w-auto">

        <div class="bg-white/10 rounded-2xl p-4 min-w-32">
          <p class="text-white/50 text-sm">Weather</p>
          <p class="font-bold text-lg">
            ${data.weather[0].main}
          </p>
        </div>

        <div class="bg-white/10 rounded-2xl p-4 min-w-32">
          <p class="text-white/50 text-sm">Description</p>
          <p class="font-bold text-lg capitalize">
            ${data.weather[0].description}
          </p>
        </div>

        <div class="bg-white/10 rounded-2xl p-4">
          <p class="text-white/50 text-sm">Humidity</p>
          <p class="font-bold text-lg">
            ${data.main.humidity}%
          </p>
        </div>

        <div class="bg-white/10 rounded-2xl p-4">
          <p class="text-white/50 text-sm">Feels Like</p>
          <p class="font-bold text-lg">
            ${Math.round(data.main.feels_like)}°C
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
    `;

  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = input.value.trim();

  if (!city) return;

  getData(city);

  input.value = "";
});
