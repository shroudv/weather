import { useContext } from 'react';
import './assets/style.css'
import NavigateBar from './components/NavigateBar';
import { WeatherContext } from './providers/WeatherProvider';
import NavigateBarLoader from './utils/Loader/NavigateBarLoader';
import MainSide from './components/MainSide'
import MainSideLoader from './utils/Loader/MainSideLoader';

function App() {

  const weather = useContext(WeatherContext);
  return (
    <div className="App">
      <>
        <div className="elements">
          <div className="c1" />
          <div className="c2" />
          <div className="c3" />
          <div className="c4" />
        </div>
        <div className="app-w">
          {weather.getWeather ? <NavigateBar /> : <NavigateBarLoader />}
          {weather.getWeather ? <MainSide /> : <MainSideLoader />}
        </div >
      </>
    </div>
  );
}




export default App;
