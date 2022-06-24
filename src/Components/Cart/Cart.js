import heartIcon from '../Assets/heart.png';
import cartIcon from '../Assets/shopping-bag.png';
import './Cart.css'

function Cart({cart, setCart}) {
    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        )
    };

    return (
			<div className='main-container'>
				<h2 className='title'>Your Shopping Bag</h2>
				<ul className='product-container'>
					{cart.length > 0 ? (
						cart.map((product, index) => (
							<li className='product-card'>
								<img src={`${product.image}`} alt='' />
								<div>
									<div className='product-title'>{product.title}</div>
									<div className='product-description'>
										<span className='price'>{`$${product.price}`}</span>
										<div className='icon-container'>
											{/* <button className='heart-icon'>
												<img src={heartIcon} alt='' />
											</button> */}
											<button
												className='cart-icon'
												onClick={() => removeFromCart(product)}>
												<img src={cartIcon} alt='' />
											</button>
										</div>
									</div>
								</div>
							</li>
						))
					) : (
						<div className='nothing-here'>Nothing here yet!</div>
					)}
				</ul>
			</div>
		);
}

export default Cart