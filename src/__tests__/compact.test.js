import compact from '../compact';

describe('Webstore Tests', () => {
  
  // Test: Should filter out falsey values from the cart list
  test('should filter out falsey values from the cart list', () => {
    const cartItems = [0, 1, false, 2, '', 3];
    
    const filteredCartItems = compact(cartItems);

    expect(filteredCartItems).toEqual([1, 2, 3]);
  });

  // Test: Should remove null and undefined from product properties
  test('should remove null and undefined from product properties', () => {
    const productDetails = [
      { product: 'Product A', price: 50, quantity: null },
      { product: 'Product B', price: undefined, quantity: 3 },
      { product: 'Product C', price: 100, quantity: undefined }
    ];

    const filteredProductDetails = productDetails.map((product) => {
      return {
        ...product,
        quantity: compact([product.quantity])[0]
      };
    });

    expect(filteredProductDetails).toEqual([
      { product: 'Product A', price: 50, quantity: null },
      { product: 'Product B', price: undefined, quantity: 3 },
      { product: 'Product C', price: 100, quantity: undefined }
    ]);
  });

  // Test: Should handle empty arrays correctly
  test('should handle empty arrays correctly', () => {
    const emptyArray = [];
    
    const result = compact(emptyArray);

    expect(result).toEqual([]);
  });

  // Test: Should remove falsey values from order history
  test('should remove falsey values from order history', () => {
    const orderHistory = [
      { orderId: '#1234', product: 'Product A', totalPrice: 100 },
      { orderId: '#1235', product: 'Product B', totalPrice: undefined },
      { orderId: '#1236', product: 'Product C', totalPrice: 50 },
      { orderId: '#1237', product: 'Product D', totalPrice: null }
    ];

    const filteredOrderHistory = orderHistory.filter((order) => {
      return compact([order.totalPrice]).length > 0;
    });

    expect(filteredOrderHistory).toEqual([
      { orderId: '#1234', product: 'Product A', totalPrice: 100 },
      { orderId: '#1236', product: 'Product C', totalPrice: 50 }
    ]);
  });

  // Test: Should remove empty strings and false values from the shopping list
  test('should remove empty strings and false values from the shopping list', () => {
    const shoppingList = ['apple', '', 'banana', false, 'orange'];
    
    const filteredShoppingList = compact(shoppingList);

    expect(filteredShoppingList).toEqual(['apple', 'banana', 'orange']);
  });

});
