// Global cart array
let cart = [];

// ✅ Theme Toggle
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
  } else {
    body.classList.replace("dark-mode", "light-mode");
  }
}

// ✅ Add to Cart (supports name & price OR "Name, Price" string)
function addToCart(nameOrString, price = null) {
  let name = nameOrString;

  // If price is not provided and input is like: "Product Name, 1999"
  if (price === null && nameOrString.includes(",")) {
    const [n, p] = nameOrString.split(",");
    name = n.trim();
    price = parseFloat(p.replace(/[^\d.]/g, ""));
  }

  if (!name || isNaN(price)) {
    alert("❌ Invalid product information.");
    return;
  }

  cart.push({ name, price });
  updateCartCount();
  alert(`${name} added to cart!`);
}

// ✅ Update cart count badge
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(span => {
    span.textContent = cart.length;
  });
}

// ✅ Open Cart Modal
function openCart() {
  const cartModal = document.getElementById("cartModal");
  const cartList = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (!cartModal || !cartList || !totalEl) return;

  cartModal.style.display = "flex";
  cartList.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name}, ₹${item.price} <button onclick="removeItem(${index})">Remove</button>`;
    cartList.appendChild(li);
  });

  totalEl.textContent = total.toLocaleString("en-IN");
}

// ✅ Close Cart Modal
function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

// ✅ Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  openCart(); // refresh modal
  updateCartCount();
}

// ✅ Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add items before checkout!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Thanks for shopping with us!\nYour total bill is ₹${total.toLocaleString("en-IN")}`);
}

// ✅ View Cart as Alert
function viewCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const summary = cart.map((item, i) => `${i + 1}. ${item.name} - ₹${item.price}`).join("\n");
  alert("Cart Items:\n" + summary);
}

// ✅ Login/Register Placeholder
function login() {
  alert("Login/Register coming soon!");
}

// ✅ Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! We'll contact you soon.");
    contactForm.reset();
  });
}

// ✅ Product Search
const searchBar = document.getElementById("searchBar");
if (searchBar) {
  searchBar.addEventListener("input", function () {
    const term = searchBar.value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(term) ? "block" : "none";
    });
  });
}

// ✅ Product Category Filtering
function filterProducts(category) {
  document.querySelectorAll(".product").forEach(product => {
    const productCategory = product.getAttribute("data-category");
    product.style.display = (category === "All" || productCategory === category)
      ? "block" : "none";
  });
}
