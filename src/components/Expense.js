import React from 'react'
import "./expense.css"

const Expense = (props) => {
    const { data } = props;
  return (
    <>
    <h1>EXPENSE TRACKER</h1>
    {
        data.map((data)=>(
            <div className='expense-item'>
                <div>28 march</div>
                <div className='expense-item__description'>
                <h2>{data.expense}</h2>
                <div className='expense-item__price'>{data.cost}</div>
                </div>
               
            </div>
        ))
    }
    </>
  )
}

export default Expense