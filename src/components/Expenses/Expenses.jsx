import { useState } from 'react';
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = ( {expenseData} ) => {

    const [filteredyear, setFilteredyear] = useState("2020");

    const updatefilteryear = (year) => {
        // console.log("In the Expenses");
        // console.log(year);

        setFilteredyear(year);
    }

    let filteredRecords = expenseData.filter((exp) => {
        return exp.date.getFullYear().toString() === filteredyear.toString();
        // console.log(exp.date.getFullYear());
    });
    // console.log(filteredRecords);

    
    return (
        <div className='expenses'>
            <ExpenseFilter updatefilteryear = {updatefilteryear} filteredyear = {filteredyear} />
            {/* <ExpenseItem expenseData={props.expenseData[0]} months = {props.months} />
            <ExpenseItem expenseData={props.expenseData[1]} months = {props.months} />
            <ExpenseItem expenseData={props.expenseData[2]} months = {props.months} /> */}
                <ExpenseChart  filteredRecords ={filteredRecords}/>
                <ExpensesList  filteredRecords ={filteredRecords}/>

            
        </div>
    )
}
 
export default Expenses;