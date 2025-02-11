import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';


function Nav () {
    return (
        <nav>
            
            <ul>
            
                <li><a href="/Home">Home</a></li>
                <li><Link to="About" smoot={true} duration={500}>About</Link></li>
                <li><a href="/Menu">Menu</a></li>
                <li><RouterLink to="/reservations">Reservations</RouterLink></li>
                <li><a href="/Order online">Order Online</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>

        </nav>
    )
}

export default Nav;