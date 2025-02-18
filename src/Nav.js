import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';


function Nav () {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAboutClick = () => {
        if (location.pathname !== "/Home") {
            navigate("/Home"); // Navegar a la página principal primero
            setTimeout(() => {
                scrollToAbout();
            }, 100); // Pequeño delay para asegurar que la página cargue antes del scroll
        } else {
            scrollToAbout();
        }
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("About");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <nav>

            <ul>

                <li><RouterLink to="/Home">Home</RouterLink></li>


                <ScrollLink 
                        to="About" 
                        smooth={true} 
                        duration={500} 
                        onClick={handleAboutClick}
                    >
                        About
                    </ScrollLink>

                <li><a href="/Menu">Menu</a></li>
                <li><RouterLink to="/reservations">Reservations</RouterLink></li>
                <li><a href="/Order online">Order Online</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>

        </nav>
    )
}

export default Nav;