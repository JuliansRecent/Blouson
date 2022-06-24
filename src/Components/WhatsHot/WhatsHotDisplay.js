import React from 'react';
import './WhatsHotDisplay.css';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const useFakeStoreAPI = () => {
	const [products, setProducts] = useState([]);

	const url = `https://fakestoreapi.com/products/?limit=6`;

	const updateProducts = () => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setProducts(json))
			.catch((error) => console.log(`There was an error! ${error}`));
	};

	useEffect(() => {
		updateProducts();
	}, []);

	return products;
};
function WhatsHotDisplay({ cart, setCart }) {
	const products = useFakeStoreAPI();
	return (
		<div className='main-container'>
			<h2 className='title'>What's Hot</h2>
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

export default WhatsHotDisplay;
