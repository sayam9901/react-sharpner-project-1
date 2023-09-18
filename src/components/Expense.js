import React, { useState } from 'react'
import "./expense.css"
import Date from './Date';
import Addexpense from "./Addexpense"
// import Card from './Card';

const Expense = (props) => {
    const { data } = props;

    // const [expense , setExpense] = useState(data)
    // const [title , setTitle] = useState(data[0].cost)

    // const delteitem = (index) =>{
    //    const updatedData = [...expense]
    //    updatedData.splice(index,1);
    //    setExpense(updatedData)
    // }

    // const setValue = (newtitle) =>{
    //   setTitle(newtitle)
    // }
  return (
    <>
    <h1>EXPENSE TRACKER</h1>
    <Addexpense/>
    {
        data.map((data)=>(
          <div className='card'>
            <div key = {data.id} className='expense-item'>
                <Date date = {data.date}/>
                <div className='expense-item__description'>
                <h2>{data.expense}</h2>
                <h2>{data.location}</h2>
                <div className='expense-item__price'>{data.cost}</div>
                {/* <button onClick={()=>delteitem(data.id)}> delete item</button>
                <button onClick={()=>setValue("Rs 100")}>change expense value</button> */}
                </div>
               
            </div>
            </div>
        ))
    }
    </>
  )
}

export default Expense