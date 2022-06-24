import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import useFakeStoreAPI from '../../hooks/useFakeStoreAPI';

function ShopWomens({ cart, setCart }) {
	const products = useFakeStoreAPI("women's clothing");
	return (
		<div className='main-container'>
			<h2 className='title'>Women's</h2>
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

export default ShopWomens;
