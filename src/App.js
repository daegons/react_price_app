import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: '휴지',
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e2',
      title: 'LG 레티나 디스플레이TV',
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: 'e3',
      title: '자동차 보험',
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: '책장',
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in app.js');
    console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
