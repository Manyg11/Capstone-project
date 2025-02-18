import { render, screen, fireEvent } from '@testing-library/react';
import TableReserve, { updateTimes} from './Tablereserve';
import React from 'react';

test("Renders the TableReserve heading", () => {
    render(<TableReserve />);
    const heading = screen.getByText("Table Reservations");
    expect(heading).toBeInTheDocument();
});
    
 
test("updateTimes updates the available times", () => {
   let availableTimesState = [];
   const setAvailableTimesMock = (newTimes) => {
         availableTimesState = newTimes;
   }
   const newTimes = ['17:00', '18:00', '19:00'];
   updateTimes(setAvailableTimesMock, newTimes);

    expect(availableTimesState).toEqual(newTimes);
});

describe("TableReserve Form", () => {
    test.only("should submit the form when all fields are valid", () => {
      render(<TableReserve />); // Renderiza el formulario
  
      // Llenar los campos del formulario con datos válidos
      fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
      
      const today = new Date().toISOString().split("T")[0]; // Fecha actual
      fireEvent.change(screen.getByLabelText(/date/i), { target: { value: today } });
  
      fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } });
      fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "2" } });
      fireEvent.change(screen.getByLabelText(/ocassion/i), { target: { value: "Birthday" } });
  
      // Simular el envío del formulario
      fireEvent.submit(screen.getByRole("form")); 
  
      // Verificar que se ha enviado correctamente (puedes validar con un mensaje de confirmación)
      expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument();
    });
  });