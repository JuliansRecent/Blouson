import './NavBar.css';
import heartImage from '../Assets/heart.png'
import cartImage from '../Assets/shopping-bag.png'
import hamburgerIcon from '../Assets/Hamburger_icon.png'
import { Link, BrowserRouter } from 'react-router-dom';

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
                            <div className='nav-item heart'>
                                <img src={heartImage} />
                            </div>
                        </li>
                        <li>
                            <div className='nav-item shopping-bag'>
                                <img src={cartImage} />
                            </div>
                        </li>
                        <li>
                            <div className='nav-item'>
                                <img src={hamburgerIcon}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='bottom-nav'>
                    <ul className='bottom-nav-items'>
                        <li className="categories">Women</li>
                        <li className="categories">Men</li>
                        <li className="categories">Jewelry</li>
                    </ul>
                </div>
			</nav>
	);
}

export default NavBar;
