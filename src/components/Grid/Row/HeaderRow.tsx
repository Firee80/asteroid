import React from 'react'
import i18next from 'i18next'
import 'components/Grid/Row/Row.scss'

export default function HeaderRow() {
  return (
    <div className='header-row'>
      <span className="header-row-col header-row-col1">{i18next.t('gridHeader.date')}</span>
      <span className="header-row-col header-row-col2">{i18next.t('gridHeader.name')}</span>
      <span className="header-row-col header-row-col3">{i18next.t('gridHeader.diameter')}</span>
      <span className="header-row-col header-row-col4">{i18next.t('gridHeader.distance')}</span>
    </div>
  )
}
