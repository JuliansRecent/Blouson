import './ShopElectronicsDisplay.css';
import { Link } from 'react-router-dom';

function ShopElectronicsDisplay(props) {
	return (
		<div className='electronics-section'>
			<div className='electronics-inner-box'>
				<Link to='/shopelectronics'>
					<button className='shop-electronics-button'>Shop Electronics</button>
				</Link>
			</div>
		</div>
	);
}

export default ShopElectronicsDisplay;
