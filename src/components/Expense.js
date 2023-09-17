import React from 'react'
import "./expense.css"

// Expense Items

// Food Rs 10

// Petrol Rs 100

// Movies Rs 200

const data = [
    {
     expense : "food",
     cost : "rs 10"
    },
    {
        expense : "petrol",
        cost : "rs 100"
       },
       {
        expense : "Movies",
        cost : "rs 200"
       },
]

const Expense = () => {
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