document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("change", filterProducts);

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const price = document.getElementById("priceFilter").value;
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const prodCat = product.dataset.category;
    const prodPrice = parseInt(product.dataset.price);

    let show = true;

    if (category !== "all" && prodCat !== category) show = false;
    if (price === "low" && prodPrice >= 500) show = false;
    if (price === "mid" && (prodPrice < 500 || prodPrice > 1000)) show = false;
    if (price === "high" && prodPrice <= 1000) show = false;

    product.style.display = show ? "block" : "none";
  });
}
