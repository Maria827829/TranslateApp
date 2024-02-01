import '../Header/Header.scss';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
        <ul className='nav'>
        <li>
            <Link to="/"><img className='nav_logo' src="src\assets\free-icon-languages-1973822.png"></img></Link>
            </li>
            <div className='nav_menu'>
            <li>
            <Link to="/" className='nav_link'>Home</Link>
            </li>
            <li>
            <Link to="/game" className='nav_link'>Game</Link>
            </li>
            </div>
        </ul>
        </div>
    );
}


export default Header
