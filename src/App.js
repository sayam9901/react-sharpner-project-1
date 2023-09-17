
import './App.css';
import Expense from './components/Expense';
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

function App() {
  return (
    <div className="App">
       <Expense data = {data}/>
    </div>
  );
}

export default App;
