import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { bgColors, countries } from '../utils';


const Home = () => {

  const [country, setCountry] = useState('');
  const [stateKey, setStateKey] = useState('');
  const [cities, setCities] = useState([]);
  const [cards, setCards] = useState([]);

  const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

  useEffect(() => {
    if (country && stateKey) {
      countries[country].states[stateKey].length && updateWeatherCards();
    } else {
      setCities([]);
      setCards([]);
    }
  }, [country, stateKey]);

const updateWeatherCards = async () => {
  try {
    const citiesList = countries[country].states[stateKey];
    setCities(citiesList);

    const dataCards = await Promise.all(
      citiesList.map(async (city, index) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countries[country].name}&appid=${apiKey}&units=metric`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (!response.ok || !data.main || !data.wind) {
            console.warn(`Invalid data for ${city}`, data);
            return null;
          }

          return {
            id: index,
            shortCode: city.slice(0, 2).toUpperCase(),city,
            weather: data.weather[0]?.main || 'N/A',
            temp: Math.round(data.main.temp),
            humidity: data.main.humidity,
            temp_min: Math.round(data.main.temp_min),
            temp_max: Math.round(data.main.temp_max),
            wind: Math.round(data.wind.speed * 3.6), 
            bgColor: bgColors[index % bgColors.length],
          };
        } catch (error) {
          console.error(`Error fetching weather for ${city}`, error);
          return null;
        }
      })
    );

    setCards(dataCards.filter(Boolean)); 
  } catch (error) {
    console.error('Error updating weather cards:', error);
  }
};


  const handleClickCard = (info) => {
    localStorage.setItem("weatherData", JSON.stringify(info));
    window.location.href = "/view"; 
  };

  const statesAvailable = country ? Object.keys(countries[country].states) : [];

  return (
<div className="font-sans m-0 p-0 box-border">
  {/* Home bar */}
  <div className="w-full h-[70px] bg-blue-600">
    <Link
      onClick={() => window.location.reload()}
      to="/"
      className="flex justify-center items-center h-full text-white text-3xl hover:text-gray-300">
      <i className="fa fa-home text-2xl"></i>
    </Link>
  </div>

{/* Selectors */}
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 px-4">
  {/* Country Selector */}
  <div className="flex flex-col w-[600px] max-w-full">
    <label htmlFor="country" className="mb-2 text-base font-medium">Select Country</label>
    <select id="country" value={country} onChange={e => {setCountry(e.target.value); setStateKey('');}}
      className="px-3 py-2 w-full rounded-lg border border-gray-300 text-sm">
      <option value="">Select Country</option>
      {Object.entries(countries).map(([code, { name }]) => (
        <option key={code} value={code}>{name}</option>
      ))}
    </select>
  </div>

  {/* State Selector */}
  <div className="flex flex-col w-[600px] max-w-full">
    <label htmlFor="state" className="mb-2 text-base font-medium">Select State</label>
    <select
      id="state"
      value={stateKey}
      onChange={e => setStateKey(e.target.value)}
      className="px-3 py-2 w-full rounded-lg border border-gray-300 text-sm"
    >
      <option value="">Select State</option>
      {statesAvailable.map(s => (
        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
      ))}
    </select>
  </div>
</div>


  {/* Weather Cards */}
  <div
    id="weatherCardsContainer"
    className="grid gap-6 p-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto"
  >
    {cards.map(card => (
      <div
        key={card.id}
        onClick={() => handleClickCard(card)}
        className="cursor-pointer text-white p-5 rounded-xl text-center shadow-md h-[200px] hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: card.bgColor }}
      >
        <h1 className="mb-2 text-xl font-bold">{card.shortCode}</h1>
        <h2 className="mb-2 text-2xl">{card.city}</h2>
        <h3 className="mb-2 text-base">{card.weather}</h3>
        <h4 className="mb-2 text-base">{card.temp}&deg;C</h4>
        <h1 className="mb-2 text-xl font-bold">View Details</h1>
      
      </div>
    ))}
  </div>
</div>

  );
}
export default Home;