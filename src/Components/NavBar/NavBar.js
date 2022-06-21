import './NavBar.css';
import { Link, BrowserRouter } from 'react-router-dom';

function NavBar(props) {
	return (
		<BrowserRouter>
			<nav>
				<div className='top-nav'>
                    <h1>
                        <Link to='/' className='logo'>
                            Blouson .
                        </Link>
                    </h1>
                    <ul className='top-nav-items'>
                        <li>
                            <div className='nav-item heart'>
                                <img href='../Icons/heart.png' />
                            </div>
                        </li>
                        <li>
                            <div className='nav-item shopping-bag'>
                                <img href='../Icons/shopping-bag.png' />
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
		</BrowserRouter>
	);
}

export default NavBar;
