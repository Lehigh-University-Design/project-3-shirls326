import React from 'react'
import './Games.css'
import NavBar from '../components/navbar.jsx'
import beth from './images/bethHarmon2.jpeg'

export default function Games() {
  return (
    <>
        <NavBar/>
        <div id='games' className='gamesContainer'>
            <h1>Highlights</h1>
            <div className='Stats'>
                <img src={beth} alt="Beth Harmon Photo" className='bethHarmonPhotoGames'/>
                <div className='StatsText'>
                    <p><b>Latest Achievement:</b> World Champion at 1968 Moscow Invitational Chess Tournament</p>
                    <hr></hr>
                    <p><b>Most Notable Win:</b> Moscow Invitation Harmon vs Borgav</p>
                    <hr></hr>
                    <p><b>Current Rating:</b> ~2700</p>

                </div>
            </div>
        </div>
    
    </>

  )
}
