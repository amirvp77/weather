export const API_key = "5d938029f0d4ff6fb7f7a6c165a0a5ca";

export const base_URL = `https://api.openweathermap.org/data/2.5`;

export const getWeather = (city, API_key) => {
  return `/weather?q=${city}&appid=${API_key}&units=metric`;
};


