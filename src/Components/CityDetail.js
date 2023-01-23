import React from 'react'
import { UseWeatherAppContext } from '../Context/Context'


function CityDetail() {
    let {state:{current,city}} = UseWeatherAppContext();
    const uvLevel = (uvLevel) =>{
        if(uvLevel <=2) return 'Düşük';
        if(uvLevel <=5) return 'Orta';
        if(uvLevel <=7) return 'Yüksek';
        if(uvLevel >7) return 'Çok Yüksek';
    }
  return (
    <div className="row mt-4 ">
        <div className="col">
            {
                current ? 
                <div>
                <div>
                    <p className='h6'>Nem <span className='float-end'>{current.humidity} %</span> </p>
                </div>
                <div>
                    <p className='h6'>Uv Seviyesi <span className='float-end'>{Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))})</span> </p>
                </div>
                <div>
                    <p className='h6'>Şehir Nüfusu <span className='float-end'>{parseFloat(city.population).toLocaleString('tr')}</span> </p>
                </div>
                 

                </div>: ''
                
            }
            
        </div>
    </div>
  )
}

export default CityDetail