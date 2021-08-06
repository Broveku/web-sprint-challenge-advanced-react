import React from "react";
import CheckoutForm from "./CheckoutForm";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    
    const firstNameInput = screen.getByLabelText(/first name:/i)
    userEvent.type(firstNameInput, 'Jordan')

    const lastNameInput = screen.getByLabelText(/last name:/i)
    userEvent.type(lastNameInput, 'Gearheart')

    const addressInput = screen.getByLabelText(/address:/i)
    userEvent.type(addressInput, '1234 Cotton Rd')

    const cityInput = screen.getByLabelText(/city:/i)
    userEvent.type(cityInput, 'Kailua-Kona')

    const stateInput = screen.getByLabelText(/state:/i)
    userEvent.type(stateInput, 'Hawaii')

    const zipInput = screen.getByLabelText(/zip:/i)
    userEvent.type(zipInput, '96740')

    const submitBtn = screen.getByRole('button')
    userEvent.click(submitBtn)

    const successMsg = screen.getByTestId(/successMessage/i)
    expect(successMsg).toBeInTheDocument()

});
