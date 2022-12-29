import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export default function Expense(props) {

  const {dispatch}=useContext(AppContext);
  const deleteExpense=()=>{
    dispatch({type:'DELETE_EXPENSE', payload:props.id})
  }
    const {id, name, cost}=props
  return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <div className='d-flex justify-content-between align-items-center'>
            <small className='bg-primary rounded-pill px-2 text-white me-2'>{cost} m.</small>
            <TiDelete 
            onClick={deleteExpense}
            size='1.8em' style={{cursor:'pointer'}}/>
        </div>
      </li>
  )
}
