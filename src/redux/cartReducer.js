const ADD_TOO_CART = "ADD_TOO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

const initialState = {
    booksCart: [],
    totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOO_CART:
            return {
                ...state,
                booksCart: [...state.booksCart, action.book],
                totalPrice: state.totalPrice += action.book.price
            }
        default: return state
    }
}

export const addTooCart = (book) => ({type: ADD_TOO_CART, book})

export default cartReducer