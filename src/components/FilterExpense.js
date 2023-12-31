import React from 'react'
import "./filterexpense.css"

const FilterExpense = (props) => {
    const DropdownChangeHandler = (e) =>{
        props.onChangeFilter(e.target.value)
    }
  return (
    <div>
        <div>
            <label>Filter By Year</label>
            <select value={props.selected} onChange={DropdownChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
  )
}

export default FilterExpense