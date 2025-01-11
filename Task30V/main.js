document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const toggle = document.querySelector(".dropdown-toggle");

  toggle.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});

//////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchModal = document.querySelector(".search-modal");
  const closeBtn = document.querySelector(".close-btn");

  searchModal.style.display = "none";

  searchIcon.addEventListener("click", () => {
    searchModal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    searchModal.style.display = "none";
  });

  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      searchModal.style.display = "none";
    }
  });
});

///////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const sbox = document.querySelectorAll(".sbox");
  const dots = document.querySelector(".dots");

  let currentSlide = 0;

  sbox.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add(index === 0 ? "active" : "");
    dots.appendChild(dot);

    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll(".dots span").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }
});

////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const wishlistIcon = document.querySelector(".Wishlist");
  const wishlistSidebar = document.querySelector(".wishlist-sidebar");
  const closeBtn = document.querySelector(".close-btn");

  wishlistIcon.addEventListener("click", () => {
    wishlistSidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    wishlistSidebar.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !wishlistSidebar.contains(e.target) &&
      !wishlistIcon.contains(e.target)
    ) {
      wishlistSidebar.classList.remove("active");
    }
  });
});

////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.querySelector(".cart");
  const cartSidebar = document.querySelector(".cart-sidebar");
  const closeBtn = document.querySelector(".close-btn");

  cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
      cartSidebar.classList.remove("active");
    }
  });
});

/////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const settingsIcon = document.querySelector(".settings-icon");
  const settingsSidebar = document.querySelector(".settings-sidebar");
  const closeBtn = document.querySelector(".close-btn");

  settingsIcon.addEventListener("click", () => {
    settingsSidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    settingsSidebar.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !settingsSidebar.contains(e.target) &&
      !settingsIcon.contains(e.target)
    ) {
      settingsSidebar.classList.remove("active");
    }
  });
});

////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const gridViewBtn = document.querySelector(".grid-view");
  const listViewBtn = document.querySelector(".list-view");
  const hotSection = document.querySelector(".hot");

  gridViewBtn.addEventListener("click", () => {
    hotSection.classList.add("grid-view-active");
    hotSection.classList.remove("list-view-active");

    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
  });

  listViewBtn.addEventListener("click", () => {
    hotSection.classList.add("list-view-active");
    hotSection.classList.remove("grid-view-active");

    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
  });
});
