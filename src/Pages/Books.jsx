import React from 'react';
import BookCard from "../components/bookCard/bookCard";

const Books = ({books, addTooCart}) => {

    const addTooCartHandler = (id) => {
        addTooCart(books.find(book => id === book.id))
    }

    return (
        <>
        {books.map(book => <BookCard key={book.id} id={book.id} addTooCart={addTooCartHandler}
                                     name={book.name} price={book.price}/>)}
        </>
    );
}

export default Books;