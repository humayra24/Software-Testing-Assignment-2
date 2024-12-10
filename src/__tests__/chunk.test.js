import chunk from '../chunk.js'

describe('chunk', () => {
  test('should split array into correct chunks', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('should return empty array for null or undefined input', () => {
    expect(chunk(null)).toEqual([]);
    expect(chunk(undefined)).toEqual([]);
  });

  test('should handle empty array input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle size of 1', () => {
    expect(chunk(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
  });

  test('should handle size of 2', () => {
    expect(chunk(['a', 'b', 'c'], 2)).toEqual([['a','b'], ['c']]);
  });

  test('should handle size greater than array length', () => {
    expect(chunk(['a', 'b'], 3)).toEqual([['a', 'b']]);
  });

  test('should handle zero as size', () => {
    expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
  });

  test('should handle non-numeric size by converting it to integer', () => {
    expect(chunk(['a', 'b', 'c', 'd'], '2.5')).toEqual([['a', 'b'], ['c', 'd']]);
  });
});
