import { render, screen } from '@testing-library/react';
import TableReserve, { updateTimes} from './Tablereserve';


test("Renders the TableReserve heading", () => {
    render(<TableReserve />);
    const heading = screen.getByText("Table Reservations");
    expect(heading).toBeInTheDocument();
});
    
 
test.only("updateTimes updates the available times", () => {
   let availableTimesState = [];
   const setAvailableTimesMock = (newTimes) => {
         availableTimesState = newTimes;
   }
   const newTimes = ['17:00', '18:00', '19:00'];
   updateTimes(setAvailableTimesMock, newTimes);

    expect(availableTimesState).toEqual(newTimes);
});

