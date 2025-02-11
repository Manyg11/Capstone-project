import './Tablereserve.css';

function TableReserve() {
    return (
        <>
        <div className='table-reserve-container'>
        <main>
            <h1>Table Reservations</h1>
            <p>Reserve a table at Little Lemon</p>
            <p>Fill out the form below to reserve a table at Little Lemon. We will contact you to confirm your reservation.</p>
            <p>Reservations are available for parties of up to 6 guests. For larger parties, please contact us directly.</p>

            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required />
                <label for="time">Time:</label>
                <input type="time" id="time" name="time" required />
                <label for="guests">Number of guests:</label>
                <input type="number" id="guests" name="guests" required />
                <button type="submit">Reserve Table</button>
            </form>
        </main>

        </div>

            </>

    )
}
export default TableReserve;
