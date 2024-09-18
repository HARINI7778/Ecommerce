var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
var cartItemsContainer = document.getElementById('cart-items');
var totalPriceElement = document.getElementById('total-price');
var totalPrice = 0;

// Display items in cart
cartItems.forEach(function (item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');

    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <p>${item.name}</p>
        <p>$${item.price}</p>
    `;

    cartItemsContainer.appendChild(itemElement);
    totalPrice += item.price;
});

// Update total price
totalPriceElement.innerText = totalPrice;

// Clear cart on checkout
document.getElementById('checkout-button').addEventListener('click', function () {
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart');  // Clear the cart
    cartItemsContainer.innerHTML = '';  // Clear the display
    totalPriceElement.innerText = '0';
});
