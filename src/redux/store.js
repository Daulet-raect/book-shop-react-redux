import {combineReducers, createStore} from "redux";
import cartReducer from "./cartReducer";
import bookReducer from "./booksReducer";

const reducers = combineReducers({
    cartPage: cartReducer,
    booksPage: bookReducer
})

const store = createStore(reducers)

window.store = store

export default store