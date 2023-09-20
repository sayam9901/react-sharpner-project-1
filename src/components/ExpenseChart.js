import React from 'react'
import Charts from './charts/Charts'

const ExpenseChart = (props) => {
    const chartDataPoints = [
        { label:"1" , value : 0},
        { label:"2" , value : 0},
        { label:"3" , value : 0},
        { label:"4" , value : 0},
        { label:"5" , value : 0},
        { label:"6" , value : 0},
        { label:"7" , value : 0},
        { label:"8" , value : 0},
        { label:"9" , value : 0},
        { label:"10" , value : 0},
        { label:"11" , value : 0},
        { label:"12" , value : 0},
    ]
    for(const expense of props.expenses){
        const expenseMonth = expense.date.split("-")[1]
        const cost = parseInt(expense.cost.split(" ")[1])
        console.log(chartDataPoints[expenseMonth-1].value)
        chartDataPoints[expenseMonth-1].value+=cost 
    }
  return (
    <div>
        <Charts dataPoints = {chartDataPoints}/>
    </div>
  )
}

export default ExpenseChart