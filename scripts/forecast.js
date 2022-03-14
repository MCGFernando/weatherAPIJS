const KEY = "cA264RGB2116DTR9XuH1ncdnWfNPGnBk";
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const url = base + `${id}?apikey=${KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data[0]

};

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const url = base + `?apikey=${KEY}&q=${city}`;

  const response = await fetch(url);
  const data = await response.json();
  return data[0];
};

/* getCity("Luanda")
  .then((data) => getWeather(data.Key))
  .then((data) => console.log(data))
  .catch((error) => console.log(error));  */
