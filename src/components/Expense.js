import React from 'react'

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
            <div  style={{display:"flex" , alignItems:"center" , justifyContent : "center"}}>
                <h1>{data.expense}</h1>
                <h1>{data.cost}</h1>
            </div>
        ))
    }
    </>
  )
}

export default Expense