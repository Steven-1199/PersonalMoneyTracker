import React, { useState } from "react";
import "./ExpenseItem.style.css";
import ExpenseDate from "./ExpsenseDate.js";
import Card from "./Card.js";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
