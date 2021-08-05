import React from 'react'
import { useState, useContext, useEffect } from 'react'
import ReactDom from 'react-dom'
import BackDrop from './Backdrop'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { CSSTransition } from 'react-transition-group'
import './Modal.css'
import { CartContext } from '../context/cart-context'


const ModalOverlay = React.memo(props => {

    const [quantity, setQuantity] = useState(1)
    const cart = useContext(CartContext)
    const productData = ([...props.detail].map(v => ({ ...v, quantity: 1 })))
    let sum = 0

    const [price, setPrice] = useState()
    const [product, setProduct] = useState(productData)

    const increaseQuantity = (id) => {
        product.forEach(p => {
            if (p.id === id) {
                p.quantity++
            }
        })
        finalPrice()
    }

    const decreaseQuantity = (id) => {
        product.forEach(p => {
            if (p.id === id) {
                p.quantity--
            }
        })
        finalPrice()
    }

    const finalPrice = () => {
        product.map(a => {
            sum = sum + (a.price * a.quantity)
        })
        setPrice(sum)
        return sum
    }

    useEffect(() => {
        finalPrice()
    })

    const removeHandler = id => {
        const updatedCart = product.filter(item => item.id !== id)
        setProduct(updatedCart)
        cart.cart(updatedCart)
    }

    const content = (
        <>
            <div className='modal'>
                <IoMdArrowDropup size={40} className='arrow' />
                <header className={`modal__header ${props.headerClass}`}>
                    <h2>{props.header}</h2>
                </header>
                {product && product.map(item =>
                    <div key={item.id} className="cart-card">
                        <img src={item.image} />
                        <div>
                            <h3>{item.name}</h3>
                            <div className='quantity'>
                                <IoMdArrowDropup size={20} onClick={() => increaseQuantity(item.id)} />
                                <h3>{item.quantity}</h3>
                                {item.quantity > 1 && <IoMdArrowDropdown size={20} onClick={() => decreaseQuantity(item.id)} />}
                            </div>
                        </div>
                        <div className='remove'>
                            <h3> ₹ {item.price * item.quantity}</h3>
                            <button onClick={() => removeHandler(item.id)}>Remove</button>
                        </div>

                    </div>
                )}
                <h3 className='total'>Total: {price}</h3>
            </div>
        </>

    )

    return ReactDom.createPortal(content, document.getElementById('modal-hook'))
})

const Modal = props => {
    return <React.Fragment>
        {props.show && <BackDrop onClick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames='modal'>
            <ModalOverlay {...props} />
        </CSSTransition>
    </React.Fragment>

}

export default Modal