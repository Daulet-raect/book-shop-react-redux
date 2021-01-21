import React from "react";
import logo from "../../logo192.png"
import "./bookCard.css"

const BookInCart = ({name, price, totalPrice}) => {

    return (
        <div className="product-item">
            <img src={logo} alt="logo"/>
                <div className="product-list">
                    <h3>{name}</h3>
                    <span className="price">₽ {price}</span>
                </div>
        </div>
    )
}

export default BookInCart