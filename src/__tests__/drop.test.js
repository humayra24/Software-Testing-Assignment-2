import drop from '../drop';

describe('drop', () => {
  // Scenario 1: Product Search and Filtering
  test('removes the first product from the list', () => {
    const products = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ];

    const result = drop(products, 1);
    expect(result).toEqual([
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ]);
  });

  // Scenario 2: Producer Adds New Products
  test('drops the first two products from the array', () => {
    const products = [
      { name: 'Product A', category: 'Category 1' },
      { name: 'Product B', category: 'Category 2' },
      { name: 'Product C', category: 'Category 3' },
    ];

    const result = drop(products, 2);
    expect(result).toEqual([{ name: 'Product C', category: 'Category 3' }]);
  });

  // Scenario 3: User Checkout and Payment
  test('does not drop any items when n is 0', () => {
    const cart = [
      { name: 'Item 1', price: 15 },
      { name: 'Item 2', price: 25 },
    ];

    const result = drop(cart, 0);
    expect(result).toEqual(cart);
  });

  test('drops all items when n exceeds the array length', () => {
    const cart = [
      { name: 'Item 1', price: 15 },
      { name: 'Item 2', price: 25 },
    ];

    const result = drop(cart, 5);
    expect(result).toEqual([]);
  });

  // Edge Case: Empty Array
  test('returns an empty array when input is empty', () => {
    const result = drop([], 2);
    expect(result).toEqual([]);
  });

  // Edge Case: Null or Undefined Input
  test('returns an empty array when input is null', () => {
    const result = drop(null, 1);
    expect(result).toEqual([]);
  });

  test('returns an empty array when input is undefined', () => {
    const result = drop(undefined, 1);
    expect(result).toEqual([]);
  });

  // Edge Case: Negative `n`
  test('returns the original array when n is negative', () => {
    const products = [
      { name: 'Product X', category: 'Category Y' },
      { name: 'Product Z', category: 'Category Y' },
    ];

    const result = drop(products, -1);
    expect(result).toEqual(products);
  });

  // Edge Case: Default `n`
  test('drops one element by default when n is not provided', () => {
    const products = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ];

    const result = drop(products);
    expect(result).toEqual([
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ]);
  });
});
