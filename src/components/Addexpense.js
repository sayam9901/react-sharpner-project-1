import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Addexpense = () => {
  const [expenseData, setExpenseData] = useState({
    expenses: "",
    cost: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const addDetails = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Details form submitted");
    console.log("Expenses: ", expenseData.expenses);
    console.log("Cost: ", expenseData.cost);
    console.log("Date: ", expenseData.date);
  };

  return (
    <div>
      <Form onSubmit={addDetails}>
        <Form.Group className="mb-3" controlId="expenses">
          <Form.Label>Expenses</Form.Label>
          <Form.Control
            type="text"
            name="expenses"
            placeholder="Enter expenses"
            onChange={handleInputChange}
            value={expenseData.expenses}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cost">
          <Form.Label>Cost in rupees</Form.Label>
          <Form.Control
            type="text"
            name="cost"
            placeholder="Enter cost"
            onChange={handleInputChange}
            value={expenseData.cost}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Date of expense"
            onChange={handleInputChange}
            value={expenseData.date}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Addexpense;
