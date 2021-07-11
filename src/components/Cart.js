import React, { createContext, useReducer, useEffect } from 'react'
import Products from './Products'
import CartContext from './CartContext'
import { reducer } from './reducer'

export const contextCart = createContext()

const initialState = {
    Item: Products,
    totalCart: 0,
    totalAmount: 0
}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const deleteCart = (id) => {
        dispatch({
            type: "DELETE_CART",
            idnumber: id
        })
    }
    const clearAll = () => {
        dispatch({
            type: 'CLEAR_ALL'
        })
    }
    const incrementCart = (id) => {
        dispatch({
            type: 'INCREMENT',
            idnumber: id
        })
    }
    const decrementCart = (id) => {
        dispatch({
            type: 'DECREMENT',
            idnumber: id
        })
    }
    useEffect(() => {
        dispatch({
            type: 'GET_TOTAL'
        })
    },[state.Item])
    console.log('cart component render');
    return (
        <contextCart.Provider value={{ ...state, deleteCart, clearAll, incrementCart, decrementCart }}>
            <CartContext />
        </contextCart.Provider>
    )
}

export default Cart