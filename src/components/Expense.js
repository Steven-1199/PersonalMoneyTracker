import "./Expense.style.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpensesChart from "./NewExpense/ExpensesChart.js";

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectYearHandler = (event) => {
    setSelectedYear(event);
  };
  const newFilterExpense = props.expenses.filter(
    (e) => e.date.getFullYear() === Number(selectedYear)
  );

  return (
    <Card className="expense">
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={selectYearHandler}
      />
      <ExpensesChart expenses={newFilterExpense} />
      <ExpenseList items={newFilterExpense} />
    </Card>
  );
}

export default Expense;
