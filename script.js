const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const product = this.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
