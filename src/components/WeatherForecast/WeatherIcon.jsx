import "./WeatherForecast.css";

const WeatherIcon = (props) => {
  const { image, imgalt } = props;
  return <img src={image} alt={imgalt}></img>;
};

export default WeatherIcon;
