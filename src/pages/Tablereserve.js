
import './Tablereserve.css';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';




const fetchAvailableTimes = async (selectedDate) => {
    try {
        if (!window.MyAPI) {
            console.error("La API no está disponible en window.");
            return [];
        }

        const response = await window.MyAPI.getAvailableTimes(selectedDate);
        console.log("Horarios disponibles:", response);
        return response || []; // Retorna un array vacío si no hay horarios
    } catch (error) {
        console.error("Error al obtener los horarios:", error);
        return [];
    }
};

export const updateTimes = async (setAvailableTimes, selectedDate) => {
    const newTimes = await fetchAvailableTimes(selectedDate);
    setAvailableTimes(newTimes);
};




function TableReserve() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [ocassion, setOcassion] = useState('');
    

    const [availableTimes, setAvailableTimes] = useState([]);

     useEffect(() => {
        updateTimes(setAvailableTimes, date);
    }, [date]);

    const[isModalOpen, setIsModalOpen] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const reservationData = {
            name,
            email,
            date,
            time,
            guests,
            ocassion,
        };

        console.log("Reserva enviada:", reservationData);

        setIsModalOpen(true);



        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setGuests('');
        setOcassion('');
    };


    return (
        <>
        <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
    <h2>✅ Reservation Confirmed!</h2>
    <p>We send you an email with all the details of your reservation.</p>
    <button onClick={() => setIsModalOpen(false)}>OK</button>
</ReactModal>

        <div className='table-reserve-container'>
        <main>
            <h1>Table Reservations</h1>
            <p>Reserve a table at Little Lemon</p>
            <p>Fill out the form below to reserve a table at Little Lemon. We will contact you to confirm your reservation.</p>
            <p>Reservations are available for parties of up to 6 guests. For larger parties, please contact us directly.</p>
            

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <label htmlFor="time">Time:</label>
                <select id="time" value={time} onChange={(e) => setTime(e.target.value)}
                 > {availableTimes.map((t, index) => (
                    <option key={index} value={t}>{t}</option>

                 ))}
                    
                </select>
                <label htmlFor="guests">Number of guests:</label>
                <input type="number" id="guests" name="guests" placeholder='1' min="1" max="6" value={guests} onChange={(e) => setGuests(e.target.value)} required />
                <label htmlFor="ocassion">Ocassion</label>
                <select id="ocassion" value={ocassion} onChange={(e) => setOcassion(e.target.value)} required
                
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement>">Engagement</option>
                    </select>
            
                <input type="submit" value="Reserve Table" />
            </form>
        </main>

        </div>

            </>

    )
}
export default TableReserve;
