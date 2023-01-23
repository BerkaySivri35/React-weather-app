import React, { useReducer, useContext, createContext } from 'react'
import { WeatherReducer } from './Reducer'

const WeatherAPPContext = createContext();

const WeatherAPPProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, {
        city: {
            "city": "Istanbul",
            "lat": "41.0100",
            "lng": "28.9603",
            "country": "Turkey",
            "iso2": "TR",
            "admin_name": "İstanbul",
            "capital": "admin",
            "population": "15154000",
            "population_proper": "15029231"
        },
        current: '',
        daily: ''
    })
    return (
        <div>
            <WeatherAPPContext.Provider value={{ state, dispatch }}>
                {children}
            </WeatherAPPContext.Provider>
        </div>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = () => {
    return useContext(WeatherAPPContext)
}