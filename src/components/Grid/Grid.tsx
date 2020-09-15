import React from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import i18next from 'i18next'
import {asteroidStylesState, asteroidsByMonth, asteroidDates} from 'recoilStore'
import HeaderRow from 'components/Grid/Row/HeaderRow'
import Row from './Row/Row'
import './Grid.scss'

export default function Grid() {
  const [styles, setStyles] = useRecoilState(asteroidStylesState)
  const {selectedAsteroidIndex} = styles
  const asteroids = useRecoilValue(asteroidsByMonth)
  const {startDate, endDate} = useRecoilValue(asteroidDates)

  function updateStyles(newPadding: string, newIndex: number) {
    const flag = newIndex !== selectedAsteroidIndex

    setStyles({
      padding: flag ? newPadding : '0',
      selectedAsteroidIndex: flag ? newIndex : -1
    })
  }

  return (
    <div className='grid animate-grid'>
      <div className='grid__title'>{i18next.t('asteroidsBetweenDates', {startDate, endDate})}</div>
      <div className='grid__table'>
        <HeaderRow />
        {asteroids.map(({name, diameter, distance, padding, date}, index) =>
          <Row
            col1={date}
            col2={name}
            col3={diameter}
            col4={distance}
            key={`${index}`}
            selected={selectedAsteroidIndex === index}
            onClick={() => updateStyles(padding, index)}
          />
        )}
      </div>
    </div>
  )
}
