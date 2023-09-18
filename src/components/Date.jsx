import React from 'react'
import "./date.css"

const Date = (props) => {
    const {date} = props

    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
  )
}

export default Date