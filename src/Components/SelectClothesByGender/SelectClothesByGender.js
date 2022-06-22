import './SelectClothesByGender.css'
import {Link} from 'react-router-dom'

function SelectClothesByGender(props) {
    return (
			<div className='mens-and-womens-container'>
				<div className='mens-image-container'>
					<Link to='/shopmens'><button className='shop-mens'>Shop Men's</button></Link>
				</div>

				<div className='womens-image-container'>
					<Link to='/shopwomens'><button className='shop-womens'>Shop Women's</button></Link>
				</div>
			</div>
		);
}

export default SelectClothesByGender;