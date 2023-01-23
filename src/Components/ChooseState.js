import React, { useEffect } from 'react'
import cities from '../Data/TrCity.json'
import axios from 'axios';

import { UseWeatherAppContext } from '../Context/Context'
function ChooseState() {
    
    const {state: {city}, dispatch} = UseWeatherAppContext();
    //console.log(UseWeatherAppContext(),city)

    const HandleChange = (e) => {
        const selectedCity = cities.filter((city) => {
            return city.city === e.target.value
        })[0]
        dispatch({
            type:'Set_city',
            payload:selectedCity
        })
        //console.log(e.target.value)
    }
    //API CALL
    const APIKEY ='34480b98aa332da53123a0ac63a4ea9d';
    let lat =city && city.lat ? city.lat:'';
    let long =city && city.lng ? city.lng:'';
    let exclude = 'hourly,minutely';
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${APIKEY}&lang=tr&units=metric`;

    const getData = () =>{
        axios.get(url).then((data)=>{
            console.log(data)
            let daily = data.data.list;
            dispatch({
                type:'Set_Daily',
                payload: daily
            })
        })
    }

    useEffect(()=>{
        getData();
    },[city])


  return (
    <div className="row ">
        <div className="col">
            <select class="form-select" aria-label="Default select example" defaultValue={city} onChange={HandleChange}>
                {
                    cities.map((city,index) =>{
                        return(
                            <option key={index} value={city.city}>{city.city} - {city.admin_name}</option>
                        )
                        
                    })
                }
            </select>
        </div>
    </div>
  )
}

export default ChooseState