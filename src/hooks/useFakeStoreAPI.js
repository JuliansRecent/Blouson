import {useEffect, useState} from 'react'

const useFakeStoreAPI = (category) => {
	const [products, setProducts] = useState([]);

	const url = `https://fakestoreapi.com/products/category/${category}?limit=3`;

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

export default useFakeStoreAPI;
