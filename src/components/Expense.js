import React, { useState } from 'react'
import "./expense.css"
import Date from './Date';
import Addexpense from "./Addexpense"
import FilterExpense from './FilterExpense';
// import Card from './Card';

const Expense = (props) => {
    const { data } = props;
    // const filterpart = filteringyear[0]
    // console.log(filterpart)

    const [expense , setExpense] = useState(data)
    const [filteredyear , setFilteredyear] = useState("2020")
    // const [title , setTitle] = useState(data[0].cost)

    const addExpense = (expenseData) =>{
      console.log(expenseData)
      setExpense([...expense , expenseData])
    }
     
    const FilterChangeHandler = (selectedyear) =>{
         setFilteredyear(selectedyear)
    }
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
    <Addexpense onAddExpense={addExpense}/>
    <FilterExpense selected = {filteredyear} onChangeFilter = {FilterChangeHandler}/>
    {
        expense.filter((item) => item.date.split("-")[0] === filteredyear)
        .map((data)=>(
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