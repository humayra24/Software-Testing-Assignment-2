import words from '../words';

describe('words Function for Webstore Testing Scenarios', () => {

  // Scenario 1: Product Search and Filtering
  test('splits product names into words correctly', () => {
    const productDescription = 'Wireless Bluetooth Headphones';

    // Using default pattern (splits by non-alphanumeric characters)
    const productWords = words(productDescription);

    // Expected output: ['Wireless', 'Bluetooth', 'Headphones']
    expect(productWords).toEqual(['Wireless', 'Bluetooth', 'Headphones']);
  });

  test('splits product descriptions with custom pattern', () => {
    const productDescription = 'Wireless-Bluetooth,Headphones';

    // Using a custom pattern to split by non-alphanumeric characters
    const customProductWords = words(productDescription, /[^, ]+/g);

    // Expected output: ['Wireless-Bluetooth', 'Headphones']
    expect(customProductWords).toEqual(['Wireless-Bluetooth', 'Headphones']);
  });

  // Scenario 2: Producer Adds New Products
  test('splits product details with multiple separators', () => {
    const productDetails = 'Product A; Price: 100, Category: Electronics';

    // Using default pattern to split product details
    const productDetailsWords = words(productDetails);

    // Expected output: ['Product', 'A', 'Price', '100', 'Category', 'Electronics']
    expect(productDetailsWords).toEqual(['Product', 'A', 'Price', '100', 'Category', 'Electronics']);
  });

  test('splits product name with special characters correctly', () => {
    const productName = 'Product_XYZ-123';

    // Using default pattern to split product name with underscores and hyphens
    const productNameWords = words(productName);

    // Expected output: ['Product', 'XYZ', '123']
    expect(productNameWords).toEqual(['Product', 'XYZ', '123']);
  });

  // Scenario 3: User Checkout and Payment Using Third-Party Services
  test('splits cart items and quantities correctly', () => {
    const cartDescription = 'Product A x 2, Product B x 1, Product C x 3';

    // Using default pattern to split cart items
    const cartWords = words(cartDescription);

    // Expected output: ['Product', 'A', 'x', '2', 'Product', 'B', 'x', '1', 'Product', 'C', 'x', '3']
    expect(cartWords).toEqual(['Product', 'A', 'x', '2', 'Product', 'B', 'x', '1', 'Product', 'C', 'x', '3']);
  });

  test('splits user shipping address correctly', () => {
    const shippingAddress = '123 Street, City, Country';

    // Using default pattern to split the shipping address
    const addressWords = words(shippingAddress);

    // Expected output: ['123', 'Street', 'City', 'Country']
    expect(addressWords).toEqual(['123', 'Street', 'City', 'Country']);
  });

  // Scenario 4: Order History and Tracking
  test('splits order details for review', () => {
    const orderDetails = 'Order 1892: Product Apple x 2, Product Blueberry x 1, Total: 25.67';

    // Using default pattern to split order details
    const orderWords = words(orderDetails);

    // Expected output: ['Order', '1892', 'Product', 'Apple', 'x', '2', 'Product', 'Blueberry', 'x', '1', 'Total', '25.67']
    expect(orderWords).toEqual(['Order', '1892', 'Product', 'Apple', 'x', '2', 'Product', 'Blueberry', 'x', '1', 'Total', '25.67']);
  });

});
