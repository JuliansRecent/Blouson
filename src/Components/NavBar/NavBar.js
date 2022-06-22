import './NavBar.css';
import heartImage from '../Assets/heart.png'
import cartImage from '../Assets/shopping-bag.png'
import hamburgerIcon from '../Assets/Hamburger_icon.png'
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<nav>
			<div className='top-nav'>
				<h1>
					<Link to='/' className='logo'>
						Blouson.
					</Link>
				</h1>
				<ul className='top-nav-items'>
					<li>
						<Link to='/liked'>
							<div className='nav-item heart'>
								<img src={heartImage} />
							</div>
						</Link>
					</li>
					<li>
						<Link to='/shoppingbag'>
							<div className='nav-item shopping-bag'>
								<img src={cartImage} />
							</div>
						</Link>
					</li>
					<li>
						<div className='nav-item'>
							<img src={hamburgerIcon} />
						</div>
					</li>
				</ul>
			</div>
			<div className='bottom-nav'>
				<ul className='bottom-nav-items'>
					<Link to='/shopwomens'>
						<li className='categories'>Women</li>
					</Link>
					<Link to='/shopmens'>
						<li className='categories'>Men</li>
					</Link>
					<Link to='/shopjewelry'>
						<li className='categories'>Jewelry</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
