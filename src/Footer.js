import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

function Footer () {
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

    const handleHomeClick = () => {
        if (location.pathname !== "/Home") {
            navigate("/Home"); // Primero navega a Home
            setTimeout(() => {
                scrollToHero();
            }, 100); // Pequeño delay para que cargue la página antes del scroll
        } else {
            scrollToHero();
        }
    };

    const scrollToHero = () => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: "smooth" });
        }
    };








    return (
        <footer>
            <div className="footer-logo">
            <img src="/logo.png" alt="Little Lemon logo" />
            </div>

            <div className="footer-section">
            <ul>
            <li><ScrollLink 
                        to="hero" 
                        smooth={true} 
                        duration={500} 
                        onClick={handleHomeClick}
                    >
                        Home
                    </ScrollLink></li>
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
            </div>
            <div className="footer-contact">
                <h3>Contact</h3>
                <p>555 Main St, Chicago</p>
                <p>
                    <b>Phone number:</b> <a href="tel:+123-456-7890">123-456-7890</a>
                </p>
                <p>
                    <b>Email:</b><a href="mailto:littlelemon55@gmail.com">littlelemon55@gmail.com</a>
                </p>
            </div>
            <div className="footer-social">
                <h3>Social Media</h3>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>

        </footer>
    )
}


export default Footer;


