import React from 'react'
import Row from './Row'

export default function EmptyRow() {
  const emptyNonBreakingSpace = '\xa0'

  return <Row
    col1={emptyNonBreakingSpace}
    col2={emptyNonBreakingSpace}
    col3={emptyNonBreakingSpace}
    col4={emptyNonBreakingSpace}
    />
}
