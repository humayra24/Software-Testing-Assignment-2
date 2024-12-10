// Import the function to test
import capitalize from '../capitalize.js';

describe('capitalize', () => {
  test('should capitalize a single word with uppercase letters', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('should capitalize a single word with mixed case letters', () => {
    expect(capitalize('fReD')).toBe('Fred');
  });

  test('should capitalize the first letter of a sentence', () => {
    expect(capitalize('tampere is a beautiful place')).toBe('Tampere is a beautiful place');
  });

  test('should capitalize a single word with lowercase letters', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle a string with only one character', () => {
    expect(capitalize('h')).toBe('H');
      });

  test('should handle strings with spaces', () => {
    expect(capitalize(' fred ')).toBe(' fred '); // Only first character of string is capitalized, spaces are preserved.
  });

  test('should handle non-alphabetic characters', () => {
    expect(capitalize('123abc')).toBe('123abc'); // Only alphabetic characters are transformed.
    expect(capitalize('!fred')).toBe('!fred');
  });

  test('should handle non-string input', () => {
    expect(capitalize(12345)).toBe('12345'); // Numbers are converted to strings.
    expect(capitalize(true)).toBe('True');  // Booleans are converted to strings.
    expect(capitalize(['fred'])).toBe('Fred'); // Arrays are converted to strings.
  });
});
