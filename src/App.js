import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import BooksContainer from "./components/BooksContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path={"/"} exact render={() => <BooksContainer/>}/>
                    <Route path={"/cart"} render={() => <CartContainer/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App