import React, { useContext } from 'react'
import Expense from './Expense';
import { AppContext } from '../context/AppContext';

export default function ExpenseList() {
    const {expenses}=useContext(AppContext)
  return (
    <ul className='list-group'>
      {
        expenses.map((expense)=>(
            <Expense
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}/>
        ))
      }
    </ul>
  )
}
