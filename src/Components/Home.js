import React from 'react'
import ChooseState from './ChooseState'
import CityDetail from './CityDetail'
import CityDetailCard from './CityDetailCard'
import WeekInfoComponents from './WeeklyInfoCard'

function Home() {
  return (
    <div className='container p-5 '>
      <ChooseState/>
      <CityDetailCard/>
      <WeekInfoComponents/>
    </div>
  )
}

export default Home
