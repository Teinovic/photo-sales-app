import React, {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartContents} = useContext(Context)
    const cartItemElements = cartContents.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {(cartContents.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart