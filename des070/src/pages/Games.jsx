import React from 'react'
import './Games.css'
import NavBar from '../components/navbar.jsx'

export default function Games() {
  return (
    <>
        <NavBar/>
        <div id='games' className='gamesContainer'>
            <h1>Highlights</h1>
            <div className='Stats'>
                <div></div>
                <div className='StatsText'>
                    <p><b>Latest Achievement:</b> dmnakdnaa</p>
                    <hr></hr>
                    <p><b>Most Notable Wins:</b> dmnakdnaa</p>
                    <hr></hr>
                    <p><b>Current:</b> dmnakdnaa</p>

                </div>
            </div>
            <p>1983 - Beth Harmon is born</p>
            <p>1984 - Beth's mother dies in a car crash</p>
        </div>
    
    </>

  )
}
