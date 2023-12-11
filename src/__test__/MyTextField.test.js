import { act, screen, render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import MyTextField from "../components/MyTextField";

describe('MyTextField', () => {
    test('tests the default props', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <MyTextField
                    placeholder="Enter your account"
                />
            )
        })
        const input = screen.getByPlaceholderText("Enter your account")
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue("")
    });
    test('tests for passing props into component', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <MyTextField
                    placeholder="Enter your account"
                />
            )
        })
        const input = screen.getByPlaceholderText("Enter your account")
        fireEvent.change(input, {
            target: {
                value: 'tiendatt3009@gmail.com'
            }
        })
        await waitFor(() => {
            expect(input).toHaveValue('tiendatt3009@gmail.com')
        })
    })
    test('tests for passing props into component with regex', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <MyTextField
                    placeholder="Enter your account"
                />
            )
        })
        const input = screen.getByPlaceholderText("Enter your account")
        fireEvent.change(input, {
            target: {
                value: 'tiendatt'
            }
        })
        await waitFor(() => {
            expect(input.value).toMatch(/^[a-zA-Z]+$/)
        })
    })
});
