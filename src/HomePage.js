import React from 'react'
import './HomePage.css'
import SideNav from './Navigation/SideNav'
import TimeLine from './TimeLine/TimeLine'

export default function HomePage() {
  return (
    <div className='homepage'>
        <div className='homepage-nav'>
            <SideNav />
        </div>
        <div className='homepage-timeline'>
            <TimeLine />
        </div>
    </div>
  )
}
