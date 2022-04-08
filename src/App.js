import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// initialising state with dummy expenses
const initialExpenses = [
  {
    id: 'e1',
    title: 'Gym Membership',
    amount: 17.99,
    date: new Date(2021, 9, 14),
  },
  {
    id: 'e2',
    title: 'Monitor',
    amount: 120,
    date: new Date(2021, 7, 25)
  },
  {
    id: 'e3',
    title: 'Monitor Arm',
    amount: 35,
    date: new Date(2021, 11, 24),
  },
  {
    id: 'e4',
    title: 'Wilson EVO NXT',
    amount: 79.95,
    date: new Date(2022, 1, 3),
  },
  {
    id: 'e5',
    title: 'Mechanical Keyboard',
    amount: 89.99,
    date: new Date(2022, 4, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  // adds newly input expense to the previous existing expenses
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </>
  );

  /* return React.createElement(
     'div',
     {},
     React.createElement('h2', {}, 'Expense Tracker'),
     React.createElement(Expenses, {items: expenses}),    
     ); */

}

export default App;