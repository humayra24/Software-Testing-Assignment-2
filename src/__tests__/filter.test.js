import filter from "../filter";

describe("filter", () => {
  test("properly filters array based on predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    expect(filter(users, ({ active }) => active)).toEqual([users[0]]);
  });

  test('should filter numbers greater than 1000', () => {
    const array = [500, 999, 1100, 1900, 440];
    const predicate = (value) => value > 1000;

    const result = filter(array, predicate);

    expect(result).toEqual([1100, 1900]);
  });

  test('should filter numbers less than 1000', () => {
    const array = [500, 999, 1100, 1900, 440];
    const predicate = (value) => value < 1000;

    const result = filter(array, predicate);

    expect(result).toEqual([500, 999, 440]);
  });

  // Scenario 1: Product Search and Filtering
  test('filters products by active status', () => {
    const products = [
      { name: 'Product A', category: 'Category 1', price: 10, active: true },
      { name: 'Product B', category: 'Category 2', price: 20, active: false },
      { name: 'Product C', category: 'Category 3', price: 15, active: true }
    ];

    const result = filter(products, ({ active }) => active);
    expect(result).toEqual([
      { name: 'Product A', category: 'Category 1', price: 10, active: true },
      { name: 'Product C', category: 'Category 3', price: 15, active: true }
    ]);
  });

  // Scenario 2: Producer adds new products
  test('filters products with blank fields', () => {
    const products = [
      { name: 'Product A', category: '', price: 10 },
      { name: 'Product B', category: 'Category 2', price: 20 },
      { name: 'Product C', category: '', price: 15 }
    ];

    const result = filter(products, ({ category }) => category === '');
    expect(result).toEqual([
      { name: 'Product A', category: '', price: 10 },
      { name: 'Product C', category: '', price: 15 }
    ]);
  });

   // Edge Case: Empty array
  test('returns an empty array when input is empty', () => {
    const products = [];
    const result = filter(products, ({ active }) => active);
    expect(result).toEqual([[]]);
  });

  // Edge Case: Null or undefined input
  test('returns an empty array when input is null or undefined', () => {
    const result = filter(null, ({ active }) => active);
    expect(result).toEqual([[]]);
  });

  // Edge Case: Predicate always false
  test('returns an empty array when predicate always returns false', () => {
    const products = [
      { name: 'Product A', category: 'Category 1', price: 10 },
      { name: 'Product B', category: 'Category 2', price: 20 }
    ];

    const result = filter(products, () => false);
    expect(result).toEqual([[]]);
  });

});
