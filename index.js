var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left = "0"
}

function closeNavbar()
{
    sidenav.style.left= "-60%"

}

var sidenav = document.querySelector(".side-navbar");
var cart = JSON.parse(localStorage.getItem('cart')) || [];

function showNavbar() {
    sidenav.style.left = "0";
}

function closeNavbar() {
    sidenav.style.left = "-60%";
}

function addToCart(productImage, productName, productPrice) {
    var product = {
        image: productImage,
        name: productName,
        price: productPrice
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';  // Redirect to cart page
}

// Add event listeners to "Shop Now" buttons
var products = document.querySelectorAll('.new-arrival-container, .most-wanted-container');
products.forEach(function (product) {
    product.querySelector('button').addEventListener('click', function () {
        var productImage = product.querySelector('img').src;
        var productName = product.querySelector('p').innerText || "Fashion Item";  // Set default if no name exists
        var productPrice = Math.floor(Math.random() * 100) + 20;  // Example price
        addToCart(productImage, productName, productPrice);
    });
});
