import React, {useContext} from 'react';
import App from '../App';
import { AppContext } from '../context/AppContext';

export default function Budget() {
  const {budget}=useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Budget : {budget} AZN</span>
    </div>
  )
}
