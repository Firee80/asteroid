import React from 'react'
import classnames from 'classnames'
import {IRowData} from 'types'
import './Row.scss'

export default function Row({col1, col2, col3, col4, selected = false, onClick}: IRowData) {
  return (
    <div className={classnames('row', {'row--selected': selected})} onClick={onClick}>
      <span className="row-col row-col1">{col1}</span>
      <span className="row-col row-col2">{col2}</span>
      <span className="row-col row-col3">{col3}</span>
      <span className="row-col row-col4">{col4}</span>
    </div>
  )
}
