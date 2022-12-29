import {createContext, useReducer} from 'react';

const AppReducer=(state, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state, 
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense)=>expense.id !== action.payload)
            }

        default:
            return state;
    }
}

const initialState={
    budget:1200,
    expenses:[
        {id:12, name:'Taxi', cost:'8'},
        {id:13, name:'Market', cost:'72'},
        {id:14, name:'Pets', cost:'10'},
        {id:15, name:'Restoration', cost:'190'},

    ]
}

export const AppContext=createContext();

export const AppProvider=({children})=>{
    const [state, dispatch]=useReducer(AppReducer, initialState);
    return(
        <AppContext.Provider
        value={{
            budget:state.budget,
            expenses:state.expenses,
            dispatch
        }}
        >
            {children}
        </AppContext.Provider>
    )
}