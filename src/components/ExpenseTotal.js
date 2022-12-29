import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

export default function ExpenseTotal() {
  const {expenses}=useContext(AppContext);
  let allExpenses=0;
  expenses.map(expense=>{
    return allExpenses+=parseInt(expense.cost);
    
  })

  return (
    <div className='alert alert-primary'>
      <span>Spent so far : {allExpenses} AZN</span>
    </div>
  )
}
