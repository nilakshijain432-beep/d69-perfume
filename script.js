function filterProducts(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function openPopup(product) {
  document.getElementById("popup-img").src = product.img;
  document.getElementById("popup-title").innerText = product.name;
  document.getElementById("popup-desc").innerText = product.desc;
  document.getElementById("price30").innerText = product.price30;
  document.getElementById("price10").innerText = product.price10;
  document.getElementById("insta-link").href = product.insta;

  document.getElementById("popup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeOnOverlay(e) {
  if (e.target.id === "popup") {
    closePopup();
  }
}

/* SWIPE DOWN TO CLOSE (MOBILE) */
let startY = 0;
const popupContent = document.querySelector(".popup-content");

popupContent.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

popupContent.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  if (endY - startY > 100) {
    closePopup();
  }
});
