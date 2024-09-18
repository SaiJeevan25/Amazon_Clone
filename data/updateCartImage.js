import { totalCartQuantity } from "./cart.js";

export function renderCartQuantityImage() {
  const cartQuantity = totalCartQuantity()

  const cartImageHTML = `
    <img class="cart-icon" src="images/icons/cart-icon.png">
    <div class="cart-quantity">${cartQuantity}</div>
    <div class="cart-text">Cart</div>
  `;

  document.querySelector('.js-cart-link')
    .innerHTML = cartImageHTML;
  console.log('hello')
}