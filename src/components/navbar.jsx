import React from 'react'
import './navbar.css'

export default function navbar() {
  return (
    <div className='navbar'>
        <div className='navBarLeft'>
            <h2>Beth</h2>

        </div>
        <div className='navBarText'>
            <h2 className='navlink'><a href='/project-3-shirls326/#about'>About</a></h2>
            <h2 className='navlink'><a href='/project-3-shirls326/#/gamesTimeline#games'>Games</a></h2>
            <h2 className='navlink'><a href='/project-3-shirls326/#/gamesTimeline#timeline'>Timeline</a></h2>
        </div>
    </div>
  )
}
