import React, { useState } from 'react';

import './Expenses.css';
import Card from '../Interface/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('Select Year')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        if (filteredYear.toString() === 'Select Year') {
           return expense
        } else {
           return expense.date.getFullYear().toString() === filteredYear;
        }
    });

    return (
        <>
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
        </>
    );
}

export default Expenses;