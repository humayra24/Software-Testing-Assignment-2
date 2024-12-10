import ceil from '../ceil';

describe('ceil', () => {
  // Scenario 1: Product Search and Filtering
  test('should round up prices for display filters', () => {
    const price = 12.34;
    const roundedPrice = ceil(price);
    expect(roundedPrice).toBe(13);

    const priceWithPrecision = 12.341;
    const roundedPriceWithPrecision = ceil(priceWithPrecision, 2);
    expect(roundedPriceWithPrecision).toBe(12.35);
  });

  // Scenario 2: Producer adds new products
  test('should handle producer price rounding', () => {
    const price = 99.99;
    const roundedPrice = ceil(price, -1);
    expect(roundedPrice).toBe(100);

    const priceWithoutCategory = 12.56;
    const roundedPriceWithoutCategory = ceil(priceWithoutCategory, 0);
    expect(roundedPriceWithoutCategory).toBe(13);
  });

  // Scenario 3: User checkout and payment
  test('should calculate total price with rounding for checkout', () => {
    const prices = [12.45, 15.78, 10.99];
    const quantities = [2, 1, 3];
    const totalPrice = prices
      .map((price, index) => ceil(price * quantities[index], 2))
      .reduce((acc, curr) => acc + curr, 0);

    expect(totalPrice).toBe(73.65);
  });

  test('should round up tax or discounts for checkout', () => {
    const tax = 5.678;
    const roundedTax = ceil(tax, 2);
    expect(roundedTax).toBe(5.68);

    const discount = 12.344;
    const roundedDiscount = ceil(discount, 2);
    expect(roundedDiscount).toBe(12.35);
  });

  // Edge Case: Invalid inputs
  test('should handle empty input as zero', () => {
    expect(ceil('')).toBe(0);    // Non-numeric input returns 0
  });
});
