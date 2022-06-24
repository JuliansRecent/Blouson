import { useEffect, useState, useReducer } from 'react';
import Product from '../Product/Product';
import useFakeStoreAPI from '../../hooks/useFakeStoreAPI';

function ShopElectronics({ cart, setCart }) {
	const products = useFakeStoreAPI('electronics');

	return (
		<div className='main-container'>
			<h2 className='title'>Electronics</h2>
			<ul className='product-container'>
				{products.length > 0 ? (
					products.map((product, index) => (
						<Product
							key={index}
							index={index}
							product={product}
							cart={cart}
							setCart={setCart}
						/>
					))
				) : (
					<div className='nothing-here'>Nothing here yet!</div>
				)}
			</ul>
		</div>
	);
}
export default ShopElectronics;
