import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'; // Importing the entire library is sufficient
import Counter from "../components/Counter";

// Test block
test("increments counter", async () => {
    // Render the component on the virtual DOM
    render(<Counter />);

    // Select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");
    const decrementBtn = screen.getByTestId("decrement");

    const buttonElement = screen.getAllByRole('button');
    const pElement = screen.getByText('0');
    const headingElement = screen.getByRole('heading', { name: /as/i });

    expect(buttonElement[0]).toBeInTheDocument();

    expect(headingElement).toBeInTheDocument();

    expect(pElement).toBeInTheDocument();

    // Interact with those elements
    fireEvent.click(incrementBtn);

    // Wait for the asynchronous update to be applied
    await waitFor(() => {
        expect(counter).toHaveTextContent("1");
    });
    fireEvent.click(incrementBtn);
    await waitFor(() => {
        expect(counter).toHaveTextContent("2");
    });
    // Interact with those elements
    fireEvent.click(decrementBtn);
    await waitFor(() => {
        expect(counter).toHaveTextContent("1");
    });
});
