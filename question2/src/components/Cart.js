import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri'
import './Cart.css'
import { CartContext } from '../context/cart-context';

const Cart = props => {

    const cart = useContext(CartContext)
    return (
        <>
            <div className="cart">
                <RiShoppingCartLine size={24} />
                {cart.cartItems && <h6>{cart.cartItems.length}</h6>}
                <h5>Cart</h5>
            </div>
        </>
    )
}
export default Cart