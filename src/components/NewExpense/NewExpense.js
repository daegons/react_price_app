import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveData} />
    </div>
  );
};
export default NewExpense;
