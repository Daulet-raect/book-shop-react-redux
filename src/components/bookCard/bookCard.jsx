import React from "react";
import logo from "../../logo192.png"
import "./bookCard.css"

const BookCard = ({name, price, addTooCart, id}) => {
    return (
        <div className="product-item">
            <img src={logo} alt="logo"/>
                <div className="product-list">
                    <h3>{name}</h3>
                    <span className="price">₽ {price}</span>
                    <button onClick={() => addTooCart(id)} className="button">В корзину</button>
                </div>
        </div>
    )
}

export default BookCard