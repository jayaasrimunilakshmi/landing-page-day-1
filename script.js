// CART FUNCTIONALITY

let cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Product added to cart successfully!");
}


// CATEGORY FILTER

function filterProducts(category) {

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        if (category === "all" ||
            product.dataset.category === category) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// SEARCH FUNCTIONALITY

let search = document.getElementById("search");

search.addEventListener("input", function() {

    let searchValue = search.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        let productName = product.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(searchValue)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});