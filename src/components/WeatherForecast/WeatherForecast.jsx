import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon.jsx";

const weatherForecast = (props) => {
  const { weather } = props;
  return (
    <div className="weather">
      <h2>{weather.day}</h2>
      <WeatherIcon image={weather.img} imagealt={weather.imgAlt} />
      <img src="" alt="" />
      <p>
        <span>conditions: </span>
        {weather.conditions}
      </p>
      <p>
        <span>time: </span>
        {weather.time}
      </p>
    </div>
  );
};

export default weatherForecast;
