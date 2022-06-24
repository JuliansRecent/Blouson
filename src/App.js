import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import WhatsHotDisplay from './Components/WhatsHot/WhatsHotDisplay';
import Dashboard from './Dashboard/Dashboard';
import ShopWomens from './Components/ShopWomens/ShopWomens';
import ShopMens from './Components/ShopMens/ShopMens';
import ShopJewelry from './Components/ShopJewelry/ShopJewelry';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import ShopElectronics from './Components/ShopElectronics/ShopElectronics';

function App() {
	const [cart, setCart] = useState([]);

	return (
		<div className='app'>
			<header>
				<NavBar />
			</header>
			<main>
				<Routes>
					<Route
						path='/shoppingbag'
						element={<Cart cart={cart} setCart={setCart} />}
					/>
					<Route
						path='/whatshot'
						element={<WhatsHotDisplay cart={cart} setCart={setCart} />}
					/>
					<Route path='/:category' element={null} />
					<Route path='/' element={<Dashboard />} />
					<Route
						path='/shopwomens'
						element={<ShopWomens cart={cart} setCart={setCart} />}
					/>
					<Route
						path='/shopmens'
						element={<ShopMens cart={cart} setCart={setCart} />}
					/>
					<Route
						path='/shopjewelry'
						element={<ShopJewelry cart={cart} setCart={setCart} />}
					/>
					<Route
						path='/shopelectronics'
						element={<ShopElectronics cart={cart} setCart={setCart} />}
					/>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
