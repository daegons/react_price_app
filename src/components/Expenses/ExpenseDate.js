import './ExpenseDate.css';

const ExpenseDate = (props) => {
  // 그냥 new Date()로만 하면 에러생김 .toISOString()로 변환해서 문자열로 출력가능
  // new Date().toISOString().slice(0, 10);
  //참조
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  const year = props.date.toLocaleString('ko-KR', { year: 'numeric' });
  const month = props.date.toLocaleString('ko-KR', { month: 'long' });
  const day = props.date.toLocaleString('ko-KR', { day: 'numeric' });

  return (
    <div className="expense-date">
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
