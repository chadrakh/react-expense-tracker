import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
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
      date: new Date(2020, 7, 25)
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
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
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