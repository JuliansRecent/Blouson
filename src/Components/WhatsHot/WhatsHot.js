import './WhatsHot.css'
import {Link} from 'react-router-dom'

function WhatsHot(props) {
	return (
		<div className='whats-hot'>
			<div className='whats-hot-inner-box'>
				<Link to='/whatshot'>
					<button className='whats-hot-button'>What's Hot</button>
				</Link>
			</div>
		</div>
	);
}

export default WhatsHot;
