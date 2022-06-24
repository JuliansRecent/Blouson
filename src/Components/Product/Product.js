import './Product.css'
import heartIcon from '../Assets/heart.png'
import cartIcon from '../Assets/shopping-bag.png'
import { useState } from 'react';


function Product({product, cart, setCart}) {
    const addToCart = () => {
        setCart([...cart, product])
    }
    return (
        <li className="product-card">
            <img src={`${product.image}`} alt="" />
            <div>
                <div className='product-title'>{product.title}</div>
                <div className="product-description">
                    <span className='price'>{`$${product.price}`}</span>
                    <div className='icon-container'>
                        {/* <button className='heart-icon'><img src={heartIcon} alt="" /></button> */}
                        <button className='cart-icon' onClick={addToCart}><img src={cartIcon} alt="" /></button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Product