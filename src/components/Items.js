import React, { useContext } from 'react'
import { contextCart } from './Cart'

const Items = ({ title, description, id, price, quantity, img }) => {
    const { deleteCart, incrementCart, decrementCart } = useContext(contextCart)
    return (
        <>
            <div className="singleCart">
                <div className="cartImg">
                    <img src={img} alt="" />
                </div>
                <div className="titleDes">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="increDecre">
                    <i className="fas fa-minus" onClick={() => decrementCart(id)} ></i>
                    <input type="text" placeholder={quantity} />
                    <i className="fas fa-plus" onClick={() => incrementCart(id)} ></i>
                </div>
                <div className="price">
                    <h4>{price}৳</h4>
                </div>
                <div className="delete" onClick={() => deleteCart(id)} >
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Items;