
import './App.css';

import Expense from './components/Expense';
import 'bootstrap/dist/css/bootstrap.min.css';
const data = [
  {
    id : 0,
   expense : "food",
   cost : "rs 10",
   date : "2020-12-11",
   location : "restorant"
  },
  {
    id:1,
      expense : "petrol",
      cost : "rs 100",
      date : "2020-11-2",
      location : "bharat petrolium"
     },
     {
      id : 2,
      expense : "Movies",
      cost : "rs 200",
      date : "2020-12-3",
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
