const products = [];

const allAvailableProductsDB = [
  {name: "3rd Raikage", price: 5.55, quantity: 0, productId: 1, image: "../images/strawberry.jpg"},
  {name: "2nd Raikage", price: 9.99, quantity: 0, productId: 2, image: "../images/orange.jpg"},
  {name: "1st Raikage", price: 8.88, quantity: 0, productId: 3, image: "../images/cherry.jpg"},
];

// add all products and quantities to cart and products
allAvailableProductsDB.forEach(availabeProduct => {
  products.push(availabeProduct);
})

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];


// utility to find an individual product in products
const getProduct = (productId) => {
  let foundProduct;
  products.forEach(product => {
    if (product.productId === productId) {
    foundProduct = product;
  }
});
  return foundProduct;
}

function addProductToCart(productId){
  let foundProduct = getProduct(productId);
  let productIndex = cart.indexOf(foundProduct);
  if(!foundProduct){
    return foundProduct;
  } else if ((productIndex) === -1) {
    foundProduct.quantity = 1;
    cart.push(foundProduct);
  } else {
    cart[productIndex].quantity += 1;
  }
  return foundProduct;
}

function increaseQuantity(productId){
  let currentProduct = getProduct(productId);
  currentProduct.quantity += 1;
  return;
}

function decreaseQuantity(productId){
  let currentProduct = getProduct(productId);
  if (currentProduct.quantity > 1) {
    currentProduct.quantity -= 1;
  } else if (currentProduct.quantity === 1) {
    removeProductFromCart(productId);
  } else {
    removeProductFromCart(productId);
  }
  return;
}

function removeProductFromCart(productId){
  let currentProduct = getProduct(productId);
  currentProduct.quantity = 0;
  cart.splice(cart.indexOf(currentProduct), 1);
  return;
}

function cartTotal(){
  let totalCartAmount = 0;
  cart.forEach(itemInCart => {
    totalCartAmount += itemInCart.price * itemInCart.quantity;
    totalCartAmount = parseFloat(totalCartAmount.toFixed(2));
  })
  return totalCartAmount;
}


function emptyCart(){
  cart = [];
  return cart;
}

function pay(amount){
  let balance = parseFloat((amount - cartTotal()).toFixed(2));
  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

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
}
