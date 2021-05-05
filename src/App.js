import "./App.css"
import React from "react"
import Header from "./components/Header"
import {Route, Switch} from "react-router-dom"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route exact path="/photo-sales-app">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App
