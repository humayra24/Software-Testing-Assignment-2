
import map from '../map';

describe('Webstore Tests', () => {
  
  // Test: Update cart quantities correctly
  test('should update cart quantities correctly', () => {
    const cartItems = [
      { product: 'Product A', price: 50, quantity: 2 },
      { product: 'Product B', price: 150, quantity: 1 }
    ];

    const updatedCart = map(cartItems, (item) => ({
      ...item,
      quantity: item.quantity + 1
    }));

    expect(updatedCart).toEqual([
      { product: 'Product A', price: 50, quantity: 3 },
      { product: 'Product B', price: 150, quantity: 2 }
    ]);
  });

  // Test: Display correct product details after filter
  test('should display correct product details after filter', () => {
    const cartItems = [
      { product: 'Product A', price: 50, category: 'Electronics' },
      { product: 'Product B', price: 150, category: 'Home' }
    ];

    const filteredProducts = map(cartItems, (item) => ({
      ...item,
      category: item.category === 'Electronics' ? 'Filtered' : item.category
    }));

    expect(filteredProducts).toEqual([
      { product: 'Product A', price: 50, category: 'Filtered' },
      { product: 'Product B', price: 150, category: 'Home' }
    ]);
  });

  // Test: Correctly format order history details
  test('should correctly format order history details', () => {
    const orderDetails = [
      { orderId: '#1234', product: 'Product A', quantity: 2, totalPrice: 100 },
      { orderId: '#1235', product: 'Product B', quantity: 1, totalPrice: 50 }
    ];

    const formattedOrderDetails = map(orderDetails, (order) => ({
      ...order,
      formattedOrderId: `Order ${order.orderId}`
    }));

    expect(formattedOrderDetails).toEqual([
      { orderId: '#1234', product: 'Product A', quantity: 2, totalPrice: 100, formattedOrderId: 'Order #1234' },
      { orderId: '#1235', product: 'Product B', quantity: 1, totalPrice: 50, formattedOrderId: 'Order #1235' }
    ]);
  });

  // Test: Display newly added products
  test('should display newly added products', () => {
    const existingProducts = [
      { product: 'Product A', price: 50 },
      { product: 'Product B', price: 150 }
    ];

    const newProduct = { product: 'Product C', price: 200 };
    
    const updatedProducts = [...existingProducts, newProduct];
    
    expect(updatedProducts).toContainEqual(newProduct);
  });

  // Function to apply a 10% tax
const applyTax = (item) => ({
    ...item,
    totalPrice: Math.round((item.price * item.quantity) * 1.1 * 100) / 100 // Round to two decimal places
  });

  // Test: Calculate correct total with tax
  test('should calculate the correct total with tax', () => {
    // Product prices before tax
    const cartItems = [
      { product: 'Product A', price: 50, quantity: 2 },
      { product: 'Product B', price: 150, quantity: 1 }
    ];

    const cartWithTax = map(cartItems, applyTax);

    // Expected output: Cart with total price after tax
    expect(cartWithTax).toEqual([
      { product: 'Product A', price: 50, quantity: 2, totalPrice: 110 },
      { product: 'Product B', price: 150, quantity: 1, totalPrice: 165 }
    ]);
  });

});

