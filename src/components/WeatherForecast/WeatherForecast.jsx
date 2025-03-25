import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon.jsx";
import WeatherDay from "./WeatherDay.jsx";

const weatherForecast = (props) => {
  const { weather } = props;
  return (
    <div className="weather">
      <WeatherIcon image={weather.img} imgalt={weather.imgAlt} />
      <WeatherDay {...weather} />
    </div>
  );
};

export default weatherForecast;
