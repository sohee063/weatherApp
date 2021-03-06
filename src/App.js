import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
const cities = ["hanoi", "paris", "new york", "seoul"];

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시,섭씨,화씨,날씨상태가 있다.
// 3. 5개의 버튼이 있다. (현재위치,다른도시...)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Pazarcık");
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.latitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=273bb32879fb498bd1e6418e3f138bff&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=273bb32879fb498bd1e6418e3f138bff&units=metric`;

    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    // if (city === "Pazarcık") {
    //   getCurrentLocation();
    // } else {
    setLoading(true);
    getWeatherByCity();
    // }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "Pazarcık") {
      setCity("Pazarcık");
    } else {
      setCity(city);
    }
    console.log("시티", city);
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />

          <WeatherButton
            className="clicked"
            cities={cities}
            handleCityChange={handleCityChange}
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            className="clicked"
            cities={cities}
            handleCityChange={handleCityChange}
          />
        </div>
      )}
    </div>
  );
}

export default App;
