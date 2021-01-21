import {connect} from "react-redux";
import Books from "../Pages/Books";
import {addTooCart} from "../redux/cartReducer";

const mapStateToProps = (state) => ({
    books: state.booksPage.books
})

export default connect(mapStateToProps, {addTooCart})(Books)