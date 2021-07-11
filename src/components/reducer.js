export const reducer = (state, action) => {
    if (action.type === "DELETE_CART") {
        return {
            ...state,
            Item: state.Item.filter((cur) => {
                return cur.id !== action.idnumber
            })
        }
    }
    if (action.type === 'CLEAR_ALL') {
        return {
            ...state, Item: []
        }
    }
    if (action.type === 'INCREMENT') {
        const updated = state.Item.map((cur) => {
            if (cur.id === action.idnumber) {
                return {
                    ...cur,
                    quantity: cur.quantity + 1
                }
            }
            return cur
        })
        return { ...state, Item: updated }
    }
    if (action.type === 'DECREMENT') {
        const noUpdated = state.Item.map((cur) => {
            if (cur.id === action.idnumber) {
                return {
                    ...cur,
                    quantity: cur.quantity - 1
                }
            }
            return cur
        }).filter((cur) => {
            return cur.quantity !== 0
        })
        return { ...state, Item: noUpdated }
    }
    if (action.type === 'GET_TOTAL') {
        const { totalCart, totalAmount } = state.Item.reduce((accum, cur) => {
            let { quantity, price } = cur
            accum.totalAmount += price * quantity
            accum.totalCart += quantity
            return accum
        }, {
            totalCart: 0,
            totalAmount: 0
        })
        return { ...state, totalCart, totalAmount }
    }
    return state
}