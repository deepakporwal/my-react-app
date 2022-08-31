import './App.css';
import { Link, Outlet } from "react-router-dom";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  
  return (
    <div className="App">
      <header>
        <p>Welcome to react</p>
      </header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {/* <Link to="/ExpenseItem" >ExpenseItem</Link> |{" "} */}
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/About">About</Link> |{" "}
        <Link to="/Sample">Sample</Link>
        <Outlet />
      </nav>
      <br />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
|   </div>
  );
}

export default App;
