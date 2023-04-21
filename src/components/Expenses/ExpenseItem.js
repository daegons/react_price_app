import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;

  const clickHandler = () => {
    setTitle('업데이트');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>제목변경</button>
    </Card>
  );
};

export default ExpenseItem;
