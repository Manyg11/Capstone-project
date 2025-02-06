

function Footer () {
    return (
        <footer>
            <div className="footer-logo">
            <img src="/logo.png" alt="Little Lemon logo" />
            </div>

            <div className="footer-section">
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Reservations">Reservations</a></li>
                <li><a href="/Order online">Order Online</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact</h3>
                <p>555 Main St, Chicago</p>
                <p><b>Phone number:</b>123-456-7890</p>
                <p><b>Email:</b>littlelemon55@gmail.com</p>
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


