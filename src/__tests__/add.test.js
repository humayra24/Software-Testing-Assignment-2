import add from '../add'; 

describe('add', () => {
    // Test Case 1: Adding two positive numbers
    test('should return the sum of two positive numbers', () => {
        expect(add(9, 4)).toBe(13); 
    });

    // Test Case 2: Adding a positive and a negative number
    test('should return the correct sum of a positive and a negative number', () => {
        expect(add(9, -4)).toBe(5); 
    });

    // Test Case 3: Adding two negative numbers
    test('should return the sum of two negative numbers', () => {
        expect(add(-10, -4)).toBe(-14); 
    });

    // Test case 4: Adding a positive number and zero
    test('should return the sum of a positive number and zero', () => {
        expect(add(11, 0)).toBe(11);
    });

    // Test case 5: Adding a negative number and zero
    test('should return the sum of a negative number and zero', () => {
        expect(add(-12, 0)).toBe(-12);
    });
  
    // Test case 6: Adding two floating-point numbers
    it('should return the sum of two floating-point numbers', () => {
        expect(add(78.45, 9.34)).toBe(87.79);
    });

    // Test case 8: Adding two large positive numbers
    test('should return the sum of two large positive numbers', () => {
        expect(add(771290127, 540)).toBe(771290667);
    });
    // Test case 9: Adding two large negative numbers
    test('should return the sum of two large negative numbers', () => {
        expect(add(-771290127, -540)).toBe(-771290667);
    });

});


