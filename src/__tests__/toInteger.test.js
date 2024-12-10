import toInteger from '../toInteger.js';

describe('toInteger', () => {
  // Test Case 1: General conversion tests
  test('should convert floating-point numbers to integers', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger(7.8)).toBe(7);
    expect(toInteger(-5.6)).toBe(-5);
  });

  test('should convert string representations of numbers to integers', () => {
    expect(toInteger('3.2')).toBe(3);
    expect(toInteger('42')).toBe(42);
    expect(toInteger('-15.9')).toBe(-15);
  });

  test('should handle special numeric values', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0); // Very small number
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE); // Large finite approximation
    expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
  });

  test('should handle non-numeric inputs gracefully', () => {
    expect(toInteger(null)).toBe(0); // Non-numeric value
    expect(toInteger(undefined)).toBe(0);
    expect(toInteger('')).toBe(0);
    expect(toInteger({})).toBe(0); // Object
    expect(toInteger([])).toBe(0); // Array
  });

  // Scenario 1: User searches for products by price
  test('should handle conversion of price inputs for filtering', () => {
    const prices = ['19.99', '50.5', '30.1', '12.8'];
    const convertedPrices = prices.map(toInteger);
    expect(convertedPrices).toEqual([19, 50, 30, 12]);
  });

  // Scenario 2: Producer adds new products
  test('should allow conversion of blank fields to default integer', () => {
    const fields = [null, undefined, '', '5.9'];
    const convertedFields = fields.map(toInteger);
    expect(convertedFields).toEqual([0, 0, 0, 5]);
  });

  // Scenario 3: Checkout and payment
  test('should calculate total price with integer conversion', () => {
    const itemPrices = [12.75, 3.4, 5.9]; // Sample prices
    const quantities = [2, 1, 3]; // Quantities
    const total = itemPrices
      .map((price, index) => toInteger(price) * quantities[index])
      .reduce((acc, curr) => acc + curr, 0);
    expect(total).toBe(42); // Integer-based total calculation
  });

  // Edge Case: Large numbers
  test('should handle large numbers gracefully', () => {
    expect(toInteger(1e10)).toBe(10000000000);
    expect(toInteger(-1e10)).toBe(-10000000000);
  });
});
