// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const productContainer = document.querySelector(".products");

categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

function applyFilters() {
  const selectedCategory = categoryFilter.value;
  const sortBy = sortFilter.value;
  let products = Array.from(document.querySelectorAll(".product"));

  // Filter by category
  products.forEach(p => {
    const category = p.getAttribute("data-category");
    p.style.display = (selectedCategory === "All" || category === selectedCategory) ? "block" : "none";
  });

  // Sort visible products
  products = products.filter(p => p.style.display !== "none");
  products.sort((a, b) => {
    const aVal = parseFloat(a.getAttribute(`data-${sortBy}`));
    const bVal = parseFloat(b.getAttribute(`data-${sortBy}`));
    return aVal - bVal;
  });

  // Append sorted
  products.forEach(p => productContainer.appendChild(p));
}
