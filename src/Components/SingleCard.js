import React from 'react'
import dayjs from 'dayjs'

function SingleCard({item, className, onClick}) {
    const WEEKDAYS =[
        'Pazar',
        'P.tesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
    ]
    const weekdayindex = dayjs.unix(item.dt).day()
  return (
    <div >
        <li key={item.sunrise} className={`${className} m-4`} onClick={onClick}>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="resim" />
            <br />
            <span>
                <small className='fw-bold'>{WEEKDAYS[weekdayindex]}</small>
            </span>
            <br></br>
            <span>
                {Math.round(item.temp.max)} <sup>o</sup>C  <span className='text-secondary ms-3'>{Math.round(item.temp.min)} <sup>o</sup>C</span>
            </span>
        </li>
    </div>
  )
}

export default SingleCard