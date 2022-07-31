import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const WeatherContext = React.createContext();


function WeatherProvider(props) {
    const [getWeather, setWeather] = useState();

    useEffect(() => {
        axios.get('https://api.weatherapi.com/v1/forecast.json?key=1ac528524a5444c5bc473959223107&q=Baku&days=8&aqi=no&alerts=no')
            .then(({ data }) => setWeather(data))
            .catch((err) => console.err(err))
    }, [])

    return (
        <WeatherContext.Provider value={{ getWeather,  setWeather }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
