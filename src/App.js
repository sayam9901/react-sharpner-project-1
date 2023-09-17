
import './App.css';
import Expense from './components/Expense';
const data = [
  {
   expense : "food",
   cost : "rs 10",
   date : new Date(2023 ,5 ,12),
   location : "restorant"
  },
  {
      expense : "petrol",
      cost : "rs 100",
      date : new Date(2023 ,5 ,12),
      location : "bharat petrolium"
     },
     {
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
