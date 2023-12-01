import { render, screen, act, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'; // Importing the entire library is sufficient
import Profile from "../components/Profile";

describe('Profile testing', () => {
    test('testing for default props', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(<Profile
            />)
        })
        const fullName = screen.getAllByRole("heading")
        expect(fullName.length).toBe(1)
    });
    test('testing for component receipt props', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(<Profile
                firstName="Dat"
                lastName="Pham"
                age={24}
            />)
        })
        const fullName = screen.getByTestId("full-name")
        expect(fullName).toHaveTextContent("Dat Pham");
        const ageValue = screen.getByTestId("age")
        expect(ageValue).toHaveTextContent(24)
    });
    test('testing for component receiving different props', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <Profile
                    firstName="Dat"
                    lastName="Pham"
                    age={24}
                />
            );
        });

        // Perform assertions for the first set of props
        const fullName1 = screen.getByTestId("full-name");
        expect(fullName1).toHaveTextContent("Dat Pham");
        const ageValue1 = screen.getByTestId("age");
        expect(ageValue1).toHaveTextContent("24");
        cleanup()
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <Profile
                    firstName="Dats"
                    lastName="Phams"
                    age={26}
                />
            );
        });

        // Perform assertions for the second set of props
        const fullName2 = screen.getByTestId("full-name");
        expect(fullName2).toHaveTextContent("Dats Phams");
        const ageValue2 = screen.getByTestId("age");
        expect(ageValue2).toHaveTextContent("26");
    });
});
