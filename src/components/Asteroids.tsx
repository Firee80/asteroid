import React from 'react'
import {RecoilRoot} from "recoil"
import EmptyGrid from "./Grid/EmptyGrid"
import Grid from "./Grid/Grid"
import Earth from './Planet/Earth/Earth'
import Asteroid from './Planet/Asteroid/Asteroid'
import './Asteroids.scss'

const nasaLogo = require('img/nasa.png')
const newThingsCoLogo = require('img/newThings.gif')

export default function Asteroids() {
  return (
    <RecoilRoot>
      <div className='asteroids'>
        <header className='asteroids-header'>
          <Earth height={100} width={100}/>
          <Asteroid />
        </header>
        <main className='asteroids-main'>
          <React.Suspense fallback={<EmptyGrid/>}>
            <Grid/>
          </React.Suspense>
        </main>
        <footer className='asteroids-footer'>
          <span>Powered by:</span>
          <div>
            <a href='https://www.newthings.co/'>
              <img src={newThingsCoLogo} alt='new things co logo' />
            </a>
            <a href='https://www.nasa.gov/'>
              <img src={nasaLogo} alt='nasa logo' />
            </a>
          </div>
        </footer>
      </div>
    </RecoilRoot>
  )
}

