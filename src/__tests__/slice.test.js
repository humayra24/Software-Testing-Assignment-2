import slice from '../slice';

describe('slice Function for Webstore Testing Scenarios', () => {

  // Scenario 1: Product Search and Filtering
  test('filters products by category and price correctly', () => {
    const products = [
      { name: 'Product A', category: 'Electronics', price: 100, producer: 'Producer 1' },
      { name: 'Product B', category: 'Clothing', price: 50, producer: 'Producer 2' },
      { name: 'Product C', category: 'Electronics', price: 150, producer: 'Producer 1' },
      { name: 'Product D', category: 'Furniture', price: 200, producer: 'Producer 3' },
    ];
    
    // Simulate filtering by category 'Electronics' and price less than 150
    const filteredProducts = slice(products.filter(product => product.category === 'Electronics' && product.price < 150), 0, 2);
    
    // Expected: Product A (price 100), Product C (price 150, but excluded because it’s not less than 150)
    expect(filteredProducts).toEqual([
      { name: 'Product A', category: 'Electronics', price: 100, producer: 'Producer 1' },
    ]);
  });

  test('pagination works for large product list', () => {
    const products = Array.from({ length: 20 }, (_, index) => ({
      name: `Product ${index + 1}`,
      category: 'Category 1',
      price: index * 10 + 50,
      producer: 'Producer 1',
    }));
    
    // Simulate pagination: Get the first 5 products (slice)
    const paginatedProducts = slice(products, 0, 5);
    expect(paginatedProducts.length).toBe(5);
    expect(paginatedProducts[0].name).toBe('Product 1');
    expect(paginatedProducts[4].name).toBe('Product 5');
  });

  // Scenario 2: Producer Adds New Products
  test('handles products with missing details', () => {
    const products = [
      { name: 'Product A', category: 'Electronics', price: 100, producer: 'Producer 1' },
      { name: 'Product B', price: 50, producer: 'Producer 2' }, // Missing category
    ];
    
    const validProducts = slice(products.filter(product => product.category), 0, 10);
    expect(validProducts).toEqual([
      { name: 'Product A', category: 'Electronics', price: 100, producer: 'Producer 1' }
    ]);
  });

  test('updates product details correctly', () => {
    const products = [
      { name: 'Product A', category: 'Electronics', price: 100, producer: 'Producer 1' },
    ];

    // Simulate a product edit by changing price
    products[0].price = 120;

    // Using slice to check for updated product details
    const updatedProducts = slice(products, 0, 1);
    expect(updatedProducts[0].price).toBe(120);
  });

  // Scenario 3: User Checkout and Payment Using Third-Party Services
  test('updates total price in the shopping cart', () => {
    const cart = [
      { name: 'Product A', price: 100, quantity: 2 },
      { name: 'Product B', price: 50, quantity: 1 },
    ];
    
    // Calculate total price for cart
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simulate slicing to get the last product (Product B)
    const lastProduct = slice(cart, cart.length - 1);
    
    expect(totalPrice).toBe(250);
    expect(lastProduct[0].name).toBe('Product B');
  });

  test('shows correct order history after payment', () => {
    const orders = [
      { orderId: '001', total: 250, status: 'Completed' },
      { orderId: '002', total: 500, status: 'Completed' },
    ];
    
    // Simulate user checking order history after payment
    const orderHistory = slice(orders, 0, 2); // Assume showing first 2 orders
    
    expect(orderHistory.length).toBe(2);
    expect(orderHistory[0].orderId).toBe('001');
    expect(orderHistory[1].orderId).toBe('002');
  });

  test('handles checkout flow with valid shipping details', () => {
    const cart = [
      { name: 'Product A', price: 100, quantity: 2 },
      { name: 'Product B', price: 50, quantity: 1 },
    ];
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    const shippingDetails = { address: '123 Street, City', postalCode: '12345', country: 'Country' };
    
    // Simulate checkout with shipping details
    const checkoutDetails = {
      cart,
      totalPrice,
      shippingDetails,
      paymentStatus: 'Completed',
    };

    // Using slice to check that the checkout flow is correct (checking last product in cart)
    const lastProductInCart = slice(cart, cart.length - 1);
    
    expect(checkoutDetails.totalPrice).toBe('250.00');
    expect(lastProductInCart[0].name).toBe('Product B');
  });
  
});
