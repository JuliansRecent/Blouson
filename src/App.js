import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import WhatsHotDisplay from './Components/WhatsHot/WhatsHotDisplay';
import Dashboard from './Dashboard/Dashboard';
import ShopWomens from './Components/ShopWomens/ShopWomens';
import ShopMens from './Components/ShopMens/ShopMens';
import ShopJewelry from './Components/ShopJewelry/ShopJewelry'

function App() {
	return (
		<div className='app'>
			<header>
				<NavBar />
			</header>
			<main>
				<Routes>
					<Route path='/whatshot' element={<WhatsHotDisplay />} />
					<Route path='/:category' element={null} />
					<Route path='/' element={<Dashboard />} />
					<Route path='/shopwomens' element={<ShopWomens />} />
					<Route path='/shopmens' element={<ShopMens />} />
					<Route path='/shopjewelry' element={<ShopJewelry />} />
				</Routes>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
