import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
// import ExpenseDate from '../Expenses/ExpenseDate';
const NewExpense = props => {
  const saveExpenseDateHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddeting(false);
  };
  const [isAddeting, setAddeting] = useState(false);

  const openExpenseForm = () => {
    setAddeting(true);
  };
  const closeExpenseForm = () => {
    setAddeting(false);
  };
  return (
    <div className="new-expense">
      {!isAddeting && (
        <button onClick={openExpenseForm}>Add New Expense</button>
      )}
      {isAddeting && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onCancel={closeExpenseForm}
        />
      )}
    </div>
  );
};
export default NewExpense;
