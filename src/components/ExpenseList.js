import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.js";

const ExpenseList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expense Found</h2>
      ) : (
        props.items.map((ev) => (
          <ExpenseItem
            key={ev.id}
            title={ev.title}
            amount={ev.amount}
            date={ev.date}
          />
        ))
      )}
    </ul>
  );
};
export default ExpenseList;
