import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState={
    item:[
        {
            id: 1, name:'Fall Limited Edition Sneakers',initialPrice:'$125.00', quantity:'x3', price:'$125.00'
        },
        {
            id: 2, name:'Fall Limited Edition Sneakers',initialPrice:'$125.00', quantity:'x3', price:'$125.00'
        }
    ]
 
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer (AppReducer, initialState)

    

      
  

    function addTransaction(item){
        dispatch({
          type:'ADD_TRANSACTION',
          payload: item
    
        })

        
      }

      
    function deleteTransaction(id){
        dispatch({
          type:'DELETE_TRANSACTION',
          payload: id
    
        })

        
      }


    return( <GlobalContext.Provider value={{
        item:state.item,
        addTransaction,
        deleteTransaction
        
        
        }}>

        {children}
    </GlobalContext.Provider>)
}