import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import useFakeStoreAPI from '../../hooks/useFakeStoreAPI';

function ShopMens() {
	const products = useFakeStoreAPI("men's clothing");
	return (
		<div className='main-container'>
			<h2 className='title'>Men's</h2>
			<ul className='product-container'>
				{products.length > 0 ? (
					products.map((product, index) => (
						<Product key={index} index={index} product={product} />
					))
				) : (
					<div>Nothing here yet!</div>
				)}
			</ul>
		</div>
	);
}

export default ShopMens;
