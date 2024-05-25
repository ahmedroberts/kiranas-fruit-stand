/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */



const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const allAvailableProductsDB = [
  {name: "3rd Raikage", price: 9.99, quantity: 9, productId: 1, image: "../images/strawberry.jpg"},
  {name: "2nd Raikage", price: 9.99, quantity: 9, productId: 2, image: "../images/orange.jpg"},
  {name: "1st Raikage", price: 9.99, quantity: 9, productId: 3, image: "../images/cherry.jpg"},
];

// add all products and quantities to cart and products
allAvailableProductsDB.forEach(availabeProduct => {
  products.push(availabeProduct);
})


function addProductToCart(){
  // alert('add Product to Cart pressed');
  console.log('add Product to Cart pressed');
  return 'Ahmed  The Raikage, has added a product.';
}
function increaseQuantity(){
  // confirm('increase Quantity has been pressed');
  return 'Kazam ask and it shall be given';
}
function decreaseQuantity(){
  // prompt('Who Goes There?!!');
  return 'Tanke it down a peg.';
}
function removeProductFromCart(){
  return 'Snap it is gone product.';
}
function cartTotal(){
  // alert('CART TOTAL Engaged')
  let totalCartAmount = 0;
  cart.forEach(itemInCart => {
    totalCartAmount += itemInCart.price * itemInCart.quantity;
  })
  return totalCartAmount;
}
function pay(){
  return 'Money from Kongakure.';
}
function emptyCart(){
  return 'Ahmed has emptied the cart.';
}


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
cart.push({name: "Cherry Kage test", price: 9.99, quantity: 2, productId: 99999, image: "../images/cherry.jpg"});

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


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
}
