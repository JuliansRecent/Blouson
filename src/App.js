import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import WhatsHot from './Components/WhatsHot/WhatsHot';
import WhatsHotDisplay from './Components/WhatsHot/WhatsHotDisplay';
import Product from './Components/Product/Product';
import Products from './Components/Product/Products';
import SelectClothesByGender from './Components/SelectClothesByGender/SelectClothesByGender';
import Dashboard from './Dashboard/Dashboard';

const useFakeStoreAPI = () => {
	const [products, setProducts] = useState([]);

	const updateProducts = () => {
		fetch('https://fakestoreapi.com/products?limit=4')
			.then((res) => res.json())
			.then((json) => setProducts(json))
			.catch((error) => console.log(`There was an error! ${error}`));
	};

	useEffect(() => {
		updateProducts();
	}, []);

	return products;
};

function App() {
	const products = useFakeStoreAPI();
	console.log(products);

	return (
		<div className='app'>
			<header>
				<NavBar />
			</header>
			<main>
				<Routes>
          <Route path='/whatshot' element={<WhatsHotDisplay />}/>
          <Route path='/:category' element={<Products/>}/>
          <Route path='/' element={<Dashboard />}/>
				</Routes>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
