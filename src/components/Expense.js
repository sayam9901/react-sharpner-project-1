import React from 'react'
import "./expense.css"
import Date from './Date';
import Card from './Card';

const Expense = (props) => {
    const { data } = props;
  return (
    <>
    <h1>EXPENSE TRACKER</h1>
    {
        data.map((data)=>(
            <Card className='expense-item'>
                <Date date = {data.date}/>
                <div className='expense-item__description'>
                <h2>{data.expense}</h2>
                <h2>{data.location}</h2>
                <div className='expense-item__price'>{data.cost}</div>
                </div>
               
            </Card>
        ))
    }
    </>
  )
}

export default Expense