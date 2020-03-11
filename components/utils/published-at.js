import React from 'react'
import { parse, format } from 'date-fns'

function PublishedAt(props) {
  const { date } = props
  return (
    <time className="dt-published">
      {format(parse(date), 'MMMM DD, YYYY')}
    </time>
  )
}

export default PublishedAt
