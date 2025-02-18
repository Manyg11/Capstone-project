import { Link } from "react-router-dom";

function Main () {
    return (
        <main>
            <section id="hero">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>A family owned mediterranean restuarant on the heart of Chicago.</p>
            <img src="/restauranfood.jpg" alt="A dish"/>
            <button>
                <Link to="/reservations" aria-label="Reserve a table">Reserve a Table</Link>
                 </button>
            </section>

            <section id="highlights">
                <div class="specials-header">
                <h2>Specials</h2>
                <button aria-label="On Click">Online Menu</button>
                </div>
                <div class="specials-container">
                <div class="dish-container">
                    <img src="greek salad.jpg" alt="Greek salad"/>
                    <h3>Greek Salad</h3>
                    <p>Our signature Greek salad with fresh vegetables and feta cheese.</p>
                    <p class="price">$12.99</p>
                </div>
                <div class="dish-container">
                    <img src="bruschetta.jpg" alt="Brushcetta"/>
                    <h3>Brushcetta</h3>
                    <p>Lettuce, tomatoes, avocado and bread.</p>
                    <p class="price">$9.99</p>
                </div>
                <div class="dish-container">
                    <img src="lemon dessert.jpg" alt="Lemon Dessert"/>
                    <h3>Lemon Cake</h3>
                    <p>Our traditional lemon cake.</p>
                    <p class="price">$6.99</p>
                </div>
                </div>
                </section>
                <section id="About">
                    <h2>About</h2>
                    <p> Little Lemon is a mediterranean family-owned restaurant since 1985,<br />
                         now in charge by Mario and Adrian, the youngest of 9 brothers,<br />
                        they keep the tradition of the mediterranean cuisine.</p>
                    <img src="Owners.jpg" alt="Mario and Adrian"/>
                </section>
        </main>
    )
}

export default Main;