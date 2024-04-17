import React from 'react'
import Games from './Games.jsx'
import Timeline from './Timeline.jsx'
import './GamesAndTimeLine.css'

export default function GamesAndTimeline() {
  return (
        <div className='gamestimelinecontainer'>
            <Games/>
            <Timeline/>
        </div>
  )
}
