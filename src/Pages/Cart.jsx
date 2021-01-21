import React from 'react';
import BookInCart from "../components/bookCard/bookInCart";

const Cart = ({booksInCart, totalPrice}) => {
    if (booksInCart.length === 0 || !booksInCart) {
        return "cart is empty"
    }
    return (
        <>
            total price: {totalPrice}
            {booksInCart.map(book => <BookInCart price={book.price} id={book.id} name={book.name} />)}
        </>
    );
}

export default Cart;