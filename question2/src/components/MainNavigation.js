import { React, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Modal from './Modal'
import './MainNavigation.css'
import { CartContext } from '../context/cart-context'

const MainNavigation = () => {

    const cart = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const modalHandler = detail => {
        setShowModal(!showModal)
    }

    return (
        <div className="main-header">
            <Link to='/' className='product-name'><h2 >Flipzon</h2></Link>
            <div className='icons' >
                <span onClick={modalHandler}>
                    <Cart />
                </span>
                <img className='user-image' src='https://images-na.ssl-images-amazon.com/images/I/71OdzOZzaGL._SL1500_.jpg' />
                <h3>Aamir</h3>
            </div>

            <Modal
                onCancel={modalHandler}
                header="Cart"
                show={showModal}
                detail={cart.cartItems}
                footer={<button className='modal-button' onClick={modalHandler}>Back</button>}
            />
        </div>
    )
}

export default MainNavigation
