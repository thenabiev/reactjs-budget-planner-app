import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid'

export default function AddExpenseForm() {
  const {dispatch}=useContext(AppContext);

  const [name, setName]=useState('');
  const [cost, setCost]=useState('');

  const onSubmit=(event)=>{
    event.preventDefault();

    const expense={
      id:uuidv4(),
      name:name,
      cost:parseInt(cost)
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
            <label htmlFor="name">Name</label>
            <input 
            value={name}
            className='form-control'
            type="text" 
            required id='name'
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input 
            value={cost}
            className='form-control'
            type="text" 
            required id='cost'
            onChange={(e)=>setCost(e.target.value)}/>
        </div>
        <div className="mt-3">
            <button 
            type='submit'
            className="btn btn-success">
                Save
            </button>
        </div>
      </div>
    </form>
  )
}
