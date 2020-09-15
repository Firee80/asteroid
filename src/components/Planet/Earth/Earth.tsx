import React from 'react'
import Planet from 'components/Planet/Planet'
import {IPlanetContainerProps} from 'types'
import './Earth.scss'

export default function Earth({height, width}: IPlanetContainerProps) {
  return <Planet
    enableGlow={true}
    rotationSpeed={0.8}
    planetClass={'earth'}
    height={height}
    width={width}
  />
}