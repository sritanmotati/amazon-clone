import React from 'react'
import { Link } from 'react-router-dom';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    const emptyCart = () => {
        return (
        <div className="emptyCart">
            <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="Empty Cart"/>
            <div className="emptyCart__container">
                <p>Your Amazon Cart is empty</p>
                <Link to='/'>
                    <button className='emptyCartBtn'>Add some items</button>
                </Link>
            </div>
        </div>
        )
        };
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon Ad" className="checkout__ad"/>
                <div>
                    {/* <h3>Hello, {user ? user.email : 'Guest'}</h3> */}
                    <h2 className="checkout__title">Shopping Cart</h2>
                    {cart.length === 0 && emptyCart()}
                    {cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
