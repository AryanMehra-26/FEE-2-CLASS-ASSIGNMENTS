import products from '../data/products.js';

// Simulates a network request so loading and error states can be practised.
export function getProducts(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Could not load products. Please try again.'));
        return;
      }

      resolve(products);
    }, 700);
  });
}
