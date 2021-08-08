import { React, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Modal from './Modal'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import './MainNavigation.css'
import { CartContext } from '../context/cart-context'
import Sidebar from './Sidebar'

const MainNavigation = ({ categoryHandler }) => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    const openDrawerHandler = () => {
        setDrawerIsOpen(true)
    }
    const closeDrawerhandler = () => {
        setDrawerIsOpen(false)
    }

    const cart = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const modalHandler = detail => {
        setShowModal(!showModal)
    }

    return <>
        {drawerIsOpen && <Backdrop onClick={closeDrawerhandler} />}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerhandler}>
            <nav className='main-navigation__drawer-nav'>
                <Sidebar categoryHandler={categoryHandler} />
            </nav>
        </SideDrawer>

        <div className="main-header">
            <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                <span />
                <span />
                <span />
            </button>
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
    </>
}

export default MainNavigation
