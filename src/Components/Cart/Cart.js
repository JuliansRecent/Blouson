import Product from "../Product/Product";
import heartIcon from '../Assets/heart.png';
import cartIcon from '../Assets/shopping-bag.png';
import useFakeStoreAPI from "../../hooks/useFakeStoreAPI";

function Cart({cart, setCart}) {
    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        )
    };

    return (
			<div>
				<h2>Your Shopping Bag</h2>
				<ul>
                {cart.map((product, index) => (
					<li className='product-card'>
						<img src={`${product.image}`} alt='' />
						<div>
							<div className='product-title'>{product.title}</div>
							<div className='product-description'>
								<span className='price'>{`$${product.price}`}</span>
								<div className='icon-container'>
									<button className='heart-icon'>
										<img src={heartIcon} alt='' />
									</button>
									<button
										className='cart-icon'
										onClick={() => removeFromCart(product)}>
										<img src={cartIcon} alt='' />
									</button>
								</div>
							</div>
						</div>
					</li>
                ))}
				</ul>
			</div>
		);
}

export default Cart