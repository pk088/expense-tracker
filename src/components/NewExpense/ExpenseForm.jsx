import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {

    const [title, setTitle] = useState("Prajwal");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();     //to stop the page from reloading
        // 
        const data = {
            date: new Date(date),
            item: title,
            price: amount,
        }

        // console.log(newObj);
        props.sendData(data);

        setTitle("");
        setAmount("");
        setDate("");

        props.setShowExpenseForm(false);
    }

    // setTitle("")

    // const updateTitle = (e) =>{
    //     console.log(e.target.value);
    // }
    // setTitle("")

    return (
        <div >
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="task">Title</label>
                        <input type="text" id="task" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>
                    {/* <div>
                    <button type="submit">Add Expense Test</button>
                </div> */}
                    <div className="new-expense__control">
                        <button type="submit" onClick={handleSubmit}>Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
