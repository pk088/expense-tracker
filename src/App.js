import { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


function App() {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // javascript code
  const [expenseData, setExpenseData] = useState([
    {
      id: "exp1",
      // date: "12 March 2021",
      date: new Date(2021,2,12),
      item: "New TV",
      price: 800
    },
    {
      id: "exp2",
      // date: "12 March 2021",
      date: new Date(2021,10,28),
      item: "Car Insurance",
      price: 300
    },
    {
      id: "exp3",
      // date: "12 March 2021",
      date: new Date(2021,5,12),
      item: "New Desk (Wooden)",
      price: 500
    },
    { 
      id: "exp4",
      // date: "12 March 2021",
      date: new Date(2021,0,12),
      item: "New Laptop",
      price: 100
    }
  ])
  
  const getNewExpenseRecord = (data) =>{
    // expenseData.push(data);
    setExpenseData([data, ...expenseData]);
    // console.log(data);
}
  // console.log(expenseData);
  return (
    <div className="App">
      <NewExpense ReadExpenseRecord = {getNewExpenseRecord}/>
      <Expenses expenseData = {expenseData} months = {months} />

    </div>
  );
}

export default App;
