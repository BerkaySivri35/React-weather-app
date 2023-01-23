import React, { useEffect, useState } from 'react'
import { UseWeatherAppContext } from '../Context/Context'
import SingleCard from './SingleCard';

function WeekInfoComponents() {
  const {state:{daily}, dispatch} = UseWeatherAppContext();
  const [selectedCard, setSelectedCard] =useState(0);
  const updateCurrent = () =>{
    return(
      dispatch({
        type:'Set_Current',
        payload:daily[selectedCard]
      })
    )
  }

  useEffect(()=>{
    updateCurrent();
  },[daily,selectedCard])
  console.log('daily',daily)
  return (
    <div className="row bg-secondary mt-4 border rounded-5 bg-opacity-25">
        <ul className='list-unstyled d-flex  flex-wrap  justify-content-center '>
          {
            daily && daily.length > 0 ? daily.map((item,index) => {
              if(index<7){
                return <SingleCard key={index} item={item} className={index === selectedCard ? 'active' : ''} onClick={() =>{
                setSelectedCard(index);
                updateCurrent();
              }}/>
              }
              
            }):''
          }
        </ul>
        
    </div>
  )
}

export default WeekInfoComponents