import { useEffect, useState } from 'react';

const useFakeStoreAPI = (category) => {
	const [products, setProducts] = useState([]);

	const url = `https://fakestoreapi.com/products/category/${category}?limit=3`;

	const updateProducts = () => {
		fetch(url, { mode: 'no-cors' })
			.then((res) => res.json())
			.then((json) => setProducts(json))
			.catch((error) => <div>` Oops! There was an error! ${error}`</div>);
	};

	useEffect(() => {
		updateProducts();
	}, []);

	return products;
};

export default useFakeStoreAPI;
