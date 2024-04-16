let cart = [];

function handleAddToCart(menuItemName, index) {
  const quantityInput = document.getElementById(`quantity-${index}`);
  const quantity = parseInt(quantityInput.value, 10);

  if (!isNaN(quantity) && quantity > 0 && quantity <= 10) {
    const cartItem = cart.find((item) => item.name === menuItemName);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      const menuItem = menuItems.find((item) => item.name === menuItemName);
      cart.push({ ...menuItem, quantity });
    }
    updateCartDisplay();
    quantityInput.value = ''; // Clear the input after adding to cart
  } else {
    alert('Please enter a quantity between 1 and 10.');
  }
}

function updateCartDisplay() {
  const cartItemsList = document.getElementById('cart-items-list');
  cartItemsList.innerHTML = '';

  let totalPrice = 0;

  cart.forEach((item) => {
    const itemTotalPrice = item.price * item.quantity;
    totalPrice += itemTotalPrice;

    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} x ${item.quantity} - $${itemTotalPrice.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
  });

  const totalPriceElement = document.getElementById('cart-total-price');
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
  if (cart.length > 0) {
    alert("Everything is free :) Enjoy!");
    cart = []; // Clear  cart
    updateCartDisplay(); // Update to show empty cart
  } else {
    alert('Your cart is empty.');
  }
}

window.checkout = checkout;
