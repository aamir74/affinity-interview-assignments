import {React,useContext} from 'react'
import './Products.css'
import { CartContext } from '../context/cart-context'
const Products = ({productData}) => {
    const cart = useContext(CartContext)
    const cartHandler = product => {
        let cartData=[...cart.cartItems,product]
        cart.cart(cartData)
    }

    return (
        <div className='products'>
            {productData.map(product => <div onClick={() => cartHandler(product)} className='card' key={product.id}>
                <img className='product-image' src={product.image} />
                <h3>{product.name}</h3>
                <h5>₹ {product.price}</h5>
                <button className='cart-button'>Add to Cart</button>
            </div>)}
        </div>
    )
}

export default Products
