import React, { useContext } from 'react'
import { WeatherContext } from '../providers/WeatherProvider';
import SearchSide from './SearchSide'
import WindIcon from '../assets/imgs/wind.png'
import Humidity from '../assets/imgs/water.png'
import Uv from '../assets/imgs/uv.png'
import Pressor from '../assets/imgs/pressor.png'
import { getImage, Translator } from '../helpers/General';
export default function NavigateBar() {
    const weather = useContext(WeatherContext);
    const date = new Date(weather.getWeather.location.localtime)
    const dataName = date.toLocaleDateString('az-az', { weekday: 'long' })

    return (
        <>
            <div className="leftBar">
                <SearchSide />
                <div className="currentDay">
                    <h1>{Translator(dataName)}</h1>
                    <div className="vicon">
                        <img src={getImage(weather.getWeather.current.condition.text)} alt="" />
                    </div>
                    <div className="content">
                        <h2>{weather.getWeather.current.temp_c + 'C°'}</h2>
                        <small>Hiss edilən {weather.getWeather.current.feelslike_c + 'C°'}</small>
                    </div>
                </div>
                <div className="body">
                    <div className="card">
                        <div className="head">
                            <img src={WindIcon} alt="" />
                            <span className="bold"> Külək</span>
                        </div>
                        <div className="content">
                            <span className="bolder">{weather.getWeather.current.wind_kph + 'km/s'}</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <img src={Humidity} alt="" />
                            <span> Rütubət</span>
                        </div>
                        <div className="content">
                            <span className="bolder">{weather.getWeather.current.humidity + '%'}</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <img src={Pressor} alt="" />
                            <span> Təyziq</span>
                        </div>
                        <div className="content">
                            <span className="bolder">{weather.getWeather.current.pressure_mb + 'hPa'}</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="head">
                            <img src={Uv} alt="" />
                            <span> UV</span>
                        </div>
                        <div className="content">
                            <span className="bolder">{weather.getWeather.current.uv + '/10'}</span>
                        </div>
                    </div>
                    <small>Son yenilənmə tarixi {weather.getWeather.current.last_updated} </small>
                </div>
            </div>
        </>
    )
}
