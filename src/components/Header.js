import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"


function Header() {
    const {cartContents} = useContext(Context)
    const cartClassName = cartContents.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            <Link to="/"><h2>Biseri Bojane</h2></Link>
            <Link to="/cart"><i className={`${cartClassName} ri-fw ri-2x`} ></i></Link>
        </header>
    )
}

export default Header
