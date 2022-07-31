import React, { useContext } from 'react'
import { WeatherContext } from '../providers/WeatherProvider';
import Day from './Day';

export default function MainSide() {
    const weather = useContext(WeatherContext);

    return (
        <div className="wrapper">
            <h1>{`${weather.getWeather.location.country}, ${weather.getWeather.location.region}`}</h1>
            <div className="days">
                {
                    weather.getWeather.forecast.forecastday.map((day, key) => key>0 ? <Day key={key} data={day} /> :null)
                }
            </div>
        </div>

    )
}
