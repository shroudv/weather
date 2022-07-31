import React, { useContext } from 'react'
import { getImage, Translator } from '../helpers/General';
import { WeatherContext } from '../providers/WeatherProvider';

export default function Day(props) {
    const weather = useContext(WeatherContext);
    const date = new Date(props.data.date)
    const dataName = date.toLocaleDateString('az-az', { weekday: 'long' })
    return (
        <>
            <div className="card">
                <div className="icon">
                    <img src={getImage(props.data.day.condition.text)} alt="" />
                </div>
                <div className="content">
                    <span className="bolder">{Translator(dataName)}</span>
                    <span className="dg">{props.data.day.avgtemp_c + 'C°'}</span>
                </div>
            </div>
        </>
    )
}
