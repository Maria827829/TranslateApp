import '../NotFound/NotFound.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function NotFound() {
    return (
    <div className='error'>
    <h1>404 Page Not Found</h1>
    <h2>Страница не найдена, чтобы вернуться на сайт, кликините на <Link to="/" className='link'>Home</Link></h2>
    </div>
    )
}

export default NotFound