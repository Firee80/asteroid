import React from 'react'
import {useRecoilValue} from 'recoil'
import {asteroidStylesState} from 'recoilStore'
import Planet from 'components/Planet/Planet'
import {IPlanetContainerProps} from 'types'
import './Asteroid.scss'

const grayImage = require('img/gray-asteroid.jpg')

export default function Asteroid({height, width}: IPlanetContainerProps) {
  const styles = useRecoilValue(asteroidStylesState)

  return <Planet
    texture={grayImage}
    enableGlow={false}
    rotationSpeed={2}
    planetClass={'asteroid'}
    styles={styles}
    height={height}
    width={width}
  />
}
