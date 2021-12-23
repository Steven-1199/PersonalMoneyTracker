import React, { useState } from "react";
import "./NewExpense.style.css";
import ExpenseForm from "./ExpenseForm.js";
import StartExpenseForm from "./StartExpenseForm.js";

const NewExpense = (props) => {
  const [addOrNot, setAddOrNot] = useState(true);
  const clickfornew = (ev) => {
    ev.preventDefault();
    setAddOrNot(false);
    console.log(addOrNot);
  };
  const clickforform = (ev) => {
    setAddOrNot(true);
  };
  const saveExpenseDataHandler = (event) => {
    const expenseData = {
      ...event,
      id: Math.random().toString(),
    };
    props.onAddExpenseDataHandler(expenseData);
  };
  return (
    <div className="new-expense">
      {addOrNot ? (
        <StartExpenseForm iclick={clickfornew} />
      ) : (
        <ExpenseForm
          iclick={clickforform}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
