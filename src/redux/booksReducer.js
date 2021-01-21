const initialState = {
    books: [
        {name: "Book 1", id: 0, price: 1999},
        {name: "Book 2", id: 1, price: 1500},
        {name: "Book 3", id: 2, price: 1900},
        {name: "Book 4", id: 3, price: 1000}
    ]
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default bookReducer