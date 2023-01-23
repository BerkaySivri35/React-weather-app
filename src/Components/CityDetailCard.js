import React from 'react'
import dayjs from 'dayjs'
import { UseWeatherAppContext } from '../Context/Context'
import CityDetail from './CityDetail';


function CityDetailCard() {
    const {state:{city,current}} = UseWeatherAppContext();

    const WEEKDAYS =[
        'Pazar',
        'P.tesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
    ]
    
    if(!current) return <div>Loading...</div>
    const weekdayindex = dayjs.unix(current.dt).day();
  return (
    <div className='container bg-light border rounded-5 mt-5 p-3 '>
        <div className="row ">
            
            <div className='col-sm-12 col-md-6 text-center bg-secondary bg-opacity-25 border rounded-5 order-sm-0 order-md-1'>
                <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="" />
                <h1>{Math.round(current.temp.max)} <sup>o</sup>C <span className='text-secondary ms-3'>{Math.round(current.temp.min)} <sup>o</sup>C</span></h1>
                <h3>{current.weather[0].main}</h3>
            </div>
            <div className="col-sm-12 col-md-6 order-sm-1 order-md-0">
                <h2>{WEEKDAYS[weekdayindex]}</h2>
                <span>{dayjs.unix(current.dt).format("DD MM YYYY")}</span>
                <br /><span>{city.city} - {city.country}</span>
                <CityDetail/>
            </div>
        
        </div>
        
    </div>
  )
}

export default CityDetailCard