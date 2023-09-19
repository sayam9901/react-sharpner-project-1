import React from 'react'
import "./date.css"

const Date = (props) => {
    const {date} = props
    const dateParts = date.split("-");
  //  console.log("this is the date in date module",date)
  const day = dateParts[2];
const month = dateParts[1];
const year = dateParts[0];
  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
  )
}

export default Date