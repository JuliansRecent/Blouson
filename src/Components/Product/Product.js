import './Product.css'
import heartIcon from '../Assets/heart.png'
import cartIcon from '../Assets/shopping-bag.png'

function Product({product}) {


    return (
        <li className="product-card">
            <img src={`${product.image}`} alt="" />
            <div>
                <div className='product-title'>{product.title}</div>
                <div className="product-description">
                    <span className='price'>{`$${product.price}`}</span>
                    <div className='icon-container'>
                        <span className='heart-icon'><img src={heartIcon} alt="" /></span>
                        <span className='cart-icon'><img src={cartIcon} alt="" /></span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Product