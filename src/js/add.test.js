// Import the function to be tested
import { add } from './add';


// Describe a test suite for the add function
describe('add function', () => {
    // Test case: adding two positive numbers
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    // Test case: adding a positive and a negative number
    test('adds 3 + (-2) to equal 1', () => {
        expect(add(3, -2)).toBe(1);
    });

    // Test case: adding two negative numbers
    test('adds (-5) + (-10) to equal -15', () => {
        expect(add(-5, -10)).toBe(-15);
    });
});
