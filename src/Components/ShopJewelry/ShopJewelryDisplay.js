import './ShopJewelryDisplay.css'
import { Link } from 'react-router-dom';

function ShopJewelryDisplay(props) {
	return (
		<div className='jewelry-section'>
			<div className='jewelry-inner-box'>
				<Link to='/shopjewelry'>
					<button className='shop-jewelry-button'>Shop Jewelry</button>
				</Link>
			</div>
		</div>
	);
}

export default ShopJewelryDisplay;