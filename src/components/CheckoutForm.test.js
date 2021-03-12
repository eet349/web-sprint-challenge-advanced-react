import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />);
	const formHeader = screen.queryByText(/checkout form/i);
	const formHeaderNot = screen.queryByText(/checkout the form/i); // Attempts to grab an element that should not be there.
	expect(formHeader).toBeInTheDocument();
	expect(formHeaderNot).not.toBeInTheDocument(); // Tests to make sure that the element that should not be there is not there, but the one that should be is indeed present.
});

test('form shows success message on submit with form details', async () => {
	render(<CheckoutForm />);
	// Grab the elements
	const fNameInput = screen.queryByLabelText('First Name:');
	const lNameInput = screen.queryByLabelText('Last Name:');
	const addressInput = screen.queryByLabelText('Address:');
	const cityInput = screen.queryByLabelText('City:');
	const stateInput = screen.queryByLabelText('State:');
	const zipInput = screen.queryByLabelText('Zip:');
	const checkoutButton = screen.queryByRole('button');

	// Simulate typing into all of the input fields
	userEvent.type(fNameInput, 'John');
	userEvent.type(lNameInput, 'Doe');
	userEvent.type(addressInput, '123 Street dr');
	userEvent.type(cityInput, 'City');
	userEvent.type(stateInput, 'ST');
	userEvent.type(zipInput, '78945');
	userEvent.click(checkoutButton);

	// await waitFor(() => { // waitFor Doesn't work with the versions of jest and react-scripts for some reason.
	const successMessage = screen.queryByTestId('successMessage');
	expect(successMessage).toBeInTheDocument();
	// });
});
