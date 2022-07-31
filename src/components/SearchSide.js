import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { WeatherContext } from '../providers/WeatherProvider';

export default function SearchSide() {

    const [getState, setState] = useState({ search: '', isShow: false, });
    const [getResult, setResult] = useState();
    const weather = useContext(WeatherContext);

    const clickHandler = () => {
        weather.setWeather(getResult)
        setState({ ...getState, search: '', isShow: false })
    }
    /* eslint-disable */
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        getState.search.length > 3 ?
            axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1ac528524a5444c5bc473959223107&q=${getState.search}&days=8&aqi=no&alerts=no`)
                .then(({ data }) => {
                    setResult(data)
                    setState({ ...getState, isShow: true })
                })
                .catch((err) => console.err(err))
            : null

    }, [getState.search]);

    return (
        <div className="searchSide">
            <input type="text" value={getState.search} onChange={(e) => setState({ ...getState, search: e.target.value })} placeholder="Şəhər Adı" />
            <div href="#">
                <i className="fa-solid fa-chevron-right" />
            </div>
            <div className={`resultSide${getState.isShow === true ? ' active' : ''}`}>
                <div className="results">
                    {
                        getResult && getState.isShow === true ?
                            <div className="result">
                                <h3 onClick={() => clickHandler()}>{getResult.location.country + ',' + getResult.location.region}</h3>
                            </div>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
