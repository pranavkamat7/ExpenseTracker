import React,{useState} from "react";
import "./ExpenseForm.css"
function ExpenseForm(props) {
const [titleEntered,setTitleEntered]=useState('')
const [amountEntered,setAmountEntered]=useState('')
const [dateEntered,setDateEntered]=useState('')

const titleChangeHandler=(event)=>{

    setTitleEntered(event.target.value)
}
const amountChangeHandler=(event)=>{

    setAmountEntered(event.target.value)
}
const dateChangeHandler=(event)=>{

    setDateEntered(event.target.value)
}

const submitHandler=(event)=>{
event.preventDefault()

const expenseData ={
title:titleEntered,
amount:+amountEntered,
date:new Date(dateEntered)


}
props.onSaveExpenseData(expenseData)
setTitleEntered('')
setAmountEntered('')
setDateEntered('')
}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleEntered} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" value={amountEntered} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={dateEntered} min="2019-01-01" step="2023-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div>
        <button type="button" onClick={props.onCancle}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
