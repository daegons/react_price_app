import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');
  //   const [userInput, setUserInput] = useState({
  //     inputTitle: '',
  //     inputAmount: '',
  //     inputDate: '',
  //   });
  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
    //=============방법 2==============
    // setUserInput({
    //   ...userInput,
    //   inputTitle: e.target.valu,
    // });
    //=============방법 3==============
    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputAmount: e.target.valu,
    // });
  };
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputDate: e.target.valu,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      ttitle: inputTitle,
      aamount: inputAmount,
      ddate: new Date(inputDate).toISOString().slice(0, 10),
    };
    props.onSaveData();
    setInputTitle('');
    setInputAmount('');
    setInputDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label htmlFor="">구매품</label>
          <input value={inputTitle} type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label htmlFor="">가격</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="">날짜</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2026-12-31"
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">비용 추가</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
