
import './App.css';
import Expense from './components/Expense';
const data = [
  {
    id : 0,
   expense : "food",
   cost : "rs 10",
   date : new Date(2023 ,5 ,12),
   location : "restorant"
  },
  {
    id:1,
      expense : "petrol",
      cost : "rs 100",
      date : new Date(2023 ,5 ,12),
      location : "bharat petrolium"
     },
     {
      id : 2,
      expense : "Movies",
      cost : "rs 200",
      date : new Date(2023 ,5 ,12),
      location : "rock plaza"
     },
]

function App() {
  return (
    <div className="App">
       <Expense data = {data} date = {data.date}/>
    </div>
  );
}

export default App;
