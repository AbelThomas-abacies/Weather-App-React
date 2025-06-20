import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const View = () => {
  const [data, setData] = useState(null);
  const [bgColor, setBgColor] = useState("#999");
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    console.log("Loaded weatherData:", weatherData);

    if (weatherData) {
      setData(weatherData);

      const weather = weatherData.weather?.toLowerCase() || "";
      if (weather.includes("rain")) setBgColor("#647d8e");
      else if (weather.includes("cloud")) setBgColor("#b0bed9");
      else if (weather.includes("clear")) setBgColor("#f9d976");
      else setBgColor("#999");

      const now = new Date();
      const day = now.toLocaleDateString(undefined, { weekday: "long" });
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimeStr(`${day} ${time}`);
    }
  }, []);

  if (!data)
    return (
      <div className="text-center mt-10 text-lg text-red-500">
        No weather data found.
      </div>
    );

  return (
    <div className="font-sans m-0 p-0 box-border">
      {/* Top bar */}
      <div className="w-full h-[70px] bg-blue-600">
        <Link
          to="/"
          className="flex justify-center items-center h-[65px] text-white text-[36px] hover:text-gray-300"
        >
          <i className="fa fa-home text-2xl"></i>
        </Link>
      </div>

      {/* Weather summary card */}
      <div
        className="flex justify-between items-center p-5 rounded-lg my-10 mx-auto w-[90%] h-[150px] text-white flex-wrap"
        style={{ backgroundColor: bgColor }}
      >
        <div className="ml-[50px]">
          <h1 className="text-2xl font-bold">{data.shortCode}</h1>
          <h2 className="mt-1 text-base">{`${data.city}${
            data.state ? `, ${data.state}` : ""
          }${data.country ? `, ${data.country}` : ""}`}</h2>
        </div>
        <div className="flex-1 flex justify-center text-black">
          <h2 className="text-xl font-bold">{data.weather}</h2>
        </div>
        <div className="text-black mr-[50px] text-right">
          <h1 className="text-xl font-bold">{Math.round(data.temp)} &deg;C</h1>
          <p className="mt-1 text-sm text-white">{timeStr}</p>
        </div>
      </div>

      {/* Weather details */}
      <div className="bg-gray-100 p-5 rounded-xl w-[90%] mx-auto text-gray-800 mb-10">
        <h2 className="mb-5 text-center text-xl font-semibold">INFORMATIONS</h2>
        <div className="flex flex-col gap-3">
          <DetailRow
            label="Humidity"
            value={data.humidity !== undefined ? `${data.humidity}%` : "N/A"}
          />
          <DetailRow
            label="Temperature Max"
            value={data.temp_max !== undefined ? `${data.temp_max}°C` : "N/A"}
          />
          <DetailRow
            label="Temperature Min"
            value={data.temp_min !== undefined ? `${data.temp_min}°C` : "N/A"}
          />
          <DetailRow
            label="Wind"
            value={data.wind !== undefined ? `${data.wind} Km/h` : "N/A"}
          />
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between text-lg text-gray-500">
    <div className="flex-1 text-left pl-[5%]">{label}</div>
    <div className="flex-1 text-right pr-[5%]">{value}</div>
  </div>
);

export default View;
