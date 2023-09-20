import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./addexpense.css";

const Addexpense = ({ onAddExpense , onCancel }) => {
  const [expenseData, setExpenseData] = useState({
    expense: "",
    cost: "",
    date: "",
    location: "",
  });

  const handleOnCanel = () =>{
    onCancel();
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const addDetails = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onAddExpense(expenseData);
    // console.log("Details form submitted");
    // console.log("Expenses: ", expenseData.expenses);
    // console.log("Cost: ", expenseData.cost);
    // console.log("this is the date in add itme module ", expenseData.date);
  };

  return (
    <div className="new-expense">
      <form onSubmit={addDetails}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label htmlFor="expenses">Expenses:</label>
            <input
              type="text"
              name="expense"
              id="expenses"
              value={expenseData.expenses}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-expense__controls">
            <label htmlFor="cost">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              value={expenseData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-expense__controls">
            <label htmlFor="cost">Cost in rupees:</label>
            <input
              type="text"
              name="cost"
              id="cost"
              value={expenseData.cost}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-expense__controls">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              min="2021-12-1"
              max="2023-12-31"

              name="date"
              id="date"
              value={expenseData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="new-expense__actions">
          <button onClick={handleOnCanel}>Cancel</button>
          <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addexpense;
