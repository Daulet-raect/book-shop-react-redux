import {connect} from "react-redux";
import Cart from "../Pages/Cart";

const mapStateToProps = (state) => ({
    booksInCart: state.cartPage.booksCart,
    totalPrice: state.cartPage.totalPrice
})

export default connect(mapStateToProps, {})(Cart)