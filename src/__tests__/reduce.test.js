import reduce from '../reduce';

describe('reduce', () => {
  // Scenario 1: Product Search and Filtering
  test('sums up product prices', () => {
    const products = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ];

    const total = reduce(products, (sum, product) => sum + product.price, 0);
    expect(total).toBe(60);
  });

  test('groups products by producer', () => {
    const products = [
      { name: 'Product 1', producer: 'Producer A' },
      { name: 'Product 2', producer: 'Producer B' },
      { name: 'Product 3', producer: 'Producer A' },
    ];

    const grouped = reduce(
      products,
      (result, product) => {
        (result[product.producer] || (result[product.producer] = [])).push(product.name);
        return result;
      },
      {}
    );

    expect(grouped).toEqual({
      'Producer A': ['Product 1', 'Product 3'],
      'Producer B': ['Product 2'],
    });
  });

  // Scenario 2: Producer Adds New Products
  test('counts the number of products with blank fields', () => {
    const products = [
      { name: 'Product 1', category: 'Category A', contents: '' },
      { name: 'Product 2', category: '', contents: 'Details B' },
      { name: 'Product 3', category: 'Category C', contents: 'Details C' },
    ];

    const count = reduce(
      products,
      (total, product) =>
        total + (product.category === '' || product.contents === '' ? 1 : 0),
      0
    );

    expect(count).toBe(2);
  });

  // Scenario 3: User Checkout and Payment
  test('calculates total price with two-decimal accuracy', () => {
    const cart = [
      { name: 'Product 1', price: 10.457 },
      { name: 'Product 2', price: 20.123 },
    ];

    const total = reduce(cart, (sum, item) => sum + item.price, 0);
    expect(total.toFixed(2)).toBe('30.58');
  });

  // Edge Case: Empty Collection
  test('returns initial accumulator for an empty collection', () => {
    const products = [];
    const total = reduce(products, (sum, product) => sum + product.price, 0);
    expect(total).toBe(0);
  });

  // Edge Case: Null or Undefined Collection
  test('handles null or undefined collection gracefully', () => {
    const total = reduce(null, (sum, product) => sum + product.price, 0);
    expect(total).toBe(0);
  });

  // Edge Case: No Initial Accumulator
  test('uses the first element as the initial accumulator if not provided', () => {
    const numbers = [10, 20, 30];
    const total = reduce(numbers, (sum, num) => sum + num);
    expect(total).toBe(60);
  });

  // Edge Case: Non-Array Collection
  test('reduces over an object collection', () => {
    const products = {
      a: { price: 10 },
      b: { price: 20 },
      c: { price: 30 },
    };

    const total = reduce(
      products,
      (sum, product) => sum + product.price,
      0
    );

    expect(total).toBe(60);
  });
});
