import "./StartExpenseForm.css";

const StartExpenseForm = (props) => {
  return (
    <form>
      <div className="startExpenseForm">
        <button onClick={props.iclick}>Add New Expense</button>
      </div>
    </form>
  );
};

export default StartExpenseForm;
