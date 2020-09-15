import React from 'react'
import i18next from 'i18next'
import HeaderRow from './Row/HeaderRow'
import EmptyRow from './Row/EmptyRow'
import './Grid.scss'

export default function EmptyGrid() {
  return (
    <div className='grid animate-grid'>
      <div className='grid__title'>{i18next.t('loading')}</div>
      <div className='grid__table'>
        <HeaderRow/>
        <EmptyRow key={'1'}/>
        <EmptyRow key={'2'}/>
        <EmptyRow key={'3'}/>
        <EmptyRow key={'4'}/>
      </div>
    </div>
  )
}
