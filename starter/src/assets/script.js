// Array named `products` holding product object literals
const products = [
  {
    name: "Sweet Strawberry",
    price: 7,
    quantity: 0,
    productId: 1,
    image: "../images/strawberry.jpg",
  },
  {
    name: "Oh So Orange",
    price: 6,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg",
  },
  {
    name: "Cheeky Cherry",
    price: 5,
    quantity: 0,
    productId: 3,
    image: "../images/cherry.jpg",
  },
];

// Array to hold product objects currently in the `cart` shopping cart
const cart = [];

// global variable to track total cost of items in `cart`
let totalCartAmount = 0;

// global variable to trak total amount of payment received
let totalPaymentReceived = 0;

// ========================================================================================================================
// Functions
// ========================================================================================================================

// ------------------------------------------------------------------------------------------------------------------------
/**
 * Find and retrieve a product based on the product ID.
 * @param {number} productId
 * @returns {object} the product withthat product ID.
 */
const getProduct = (productId) => {
  let foundProduct;
  products.forEach((product) => {
    if (product.productId === productId) {
      foundProduct = product;
    }
  });
  return foundProduct;
};

// ------------------------------------------------------------------------------------------------------------------------
/**
 * Add product to `cart` based on product ID.
 * - gets the correct product
 * - if that product is not in cart it adds that product
 * - if product is already in cart it increases the quantity by 1
 * @param {number} productId
 * @returns {object} product or undefined
 */
function addProductToCart(productId) {
  const foundProduct = getProduct(productId);
  const productIndex = cart.indexOf(foundProduct);
  if (!foundProduct) {
    return foundProduct;
  } else if (productIndex === -1) {
    foundProduct.quantity = 1;
    cart.push(foundProduct);
  } else {
    cart[productIndex].quantity += 1;
  }
  return foundProduct;
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * Finds the correct product based on product ID.
 * - increases the quantity property by 1
 * @param {number} productId
 */
function increaseQuantity(productId) {
  let currentProduct = getProduct(productId);
  currentProduct.quantity += 1;
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * Finds the correct product based on product ID.
 * - decreases the quantity property by 1
 * @param {number} productId
 */
function decreaseQuantity(productId) {
  const currentProduct = getProduct(productId);
  if (currentProduct.quantity > 1) {
    currentProduct.quantity -= 1;
  } else if (currentProduct.quantity === 1) {
    removeProductFromCart(productId);
  } else {
    removeProductFromCart(productId);
  }
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * selects product based on product id
 * - sets the value of quantity to 0
 * - removes selected product from `cart`
 * @param {number} productId
 */
function removeProductFromCart(productId) {
  const currentProduct = getProduct(productId);
  currentProduct.quantity = 0;
  cart.splice(cart.indexOf(currentProduct), 1);
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * iterates through, and empties `cart`
 * - pops last element form array until all elements removed
 * @returns {array} cart
 */
function emptyCart() {
  while (cart.length > 0) {
    cart.pop();
  }
  clearCart();
  return cart;
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * calculates total value of cart
 * multiples each element in `cart` price by quantity the sums the values
 * @returns {number} value of all items in cart
 */
function cartTotal() {
  totalCartAmount = 0;
  cart.forEach((itemInCart) => {
    totalCartAmount += itemInCart.price * itemInCart.quantity;
  });
  return totalCartAmount;
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * 
 * @param {number} amount 
 * @returns 
 */
function pay(amount) {
  totalPaymentReceived += parseFloat(amount);
  const balance = totalPaymentReceived - totalCartAmount;
  if (balance > 0) {
    totalPaymentReceived = 0;
  }
  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

// ------------------------------------------------------------------------------------------------------------------------
/**
 * Clears the .pay-summary of any appended divs that exist.
 */
function drawCleanCheckout() {
  let receiptDetails = document.querySelector(".pay-summary");
  receiptDetails.innerHTML = "";
}

// ------------------------------------------------------------------------------------------------------------------------
/**
 * Resets the running totals of payments and cart amount; 
 * - then calls drawCleanCheckout().
 */
function clearCart() {
  totalCartAmount = 0;
  totalPaymentReceived = 0;
  drawCleanCheckout();
}

// ------------------------------------------------------------------------------------------------------------------------

// ========================================================================================================================
// ========================================================================================================================

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
