import React, { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import Items from './Items'
import { contextCart } from './Cart'

const CartContext = () => {
    const { Item, clearAll, totalCart, totalAmount } = useContext(contextCart)
    if (Item.length === 0) {
        return (
            <>
                <header>
                    <div className="container">
                        <div className="wraper">
                            <div className="arrowbox carttop">
                                <img src="./images/right-arrow.png" alt="arrow" />
                                <h4>Continue Shopping</h4>
                            </div>
                            <div className="cartbox carttop">
                                <img src="./images/shopping-cart.png" alt="cart" />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="shoppingSelect">
                    <div className="container">
                        <h2>Shopping Cart</h2>
                        <p>You Have <span>0</span> items in Shopping Cart</p>
                    </div>
                </section>
            </>
        )
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="wraper">
                        <div className="arrowbox carttop">
                            <img src="./images/right-arrow.png" alt="arrow" />
                            <h4>Continue Shopping</h4>
                        </div>
                        <div className="cartbox carttop">
                            <img src="./images/shopping-cart.png" alt="cart" />
                            <span>{totalCart}</span>
                        </div>
                    </div>
                    <hr />
                </div>
            </header>
            <section id="shoppingSelect">
                <div className="container">
                    <h2>Shopping Cart</h2>
                    <p>You Have <span>{totalCart}</span> items in Shopping Cart</p>

                    <div className="cartMain">
                        <Scrollbars style={{ height: "450px" }}>
                            <div className="cartInner">
                                {Item.map((val,index) => {
                                    return <Items {...val} key={index} />
                                })}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </section>
            <div className="cartTotal">
                <div className="container">
                    <h3>Cart Total: <span>{totalAmount}৳</span></h3>
                    <button className="checkout">Checkout</button>
                    <button className="clearCart" onClick={clearAll}>Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default CartContext