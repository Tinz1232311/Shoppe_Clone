const heartBtns = document.querySelectorAll(".home-product-item__like");
const categoryList = document.querySelectorAll(".category-item");
const headerSortList = document.querySelectorAll(".header__sort-item");

heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("home-product-item__like--liked");
  });
});

categoryList.forEach((categoryItem) => {
  categoryItem.addEventListener("click", () => {
    const activeItem = document.querySelector(".category-item--active");
    if (activeItem) {
      activeItem.classList.remove("category-item--active");
    }
    categoryItem.classList.add("category-item--active");
  });
});

headerSortList.forEach((headerSortItem) => {
  headerSortItem.addEventListener("click", () => {
    const activeItem = document.querySelector(".header__sort-item--active");
    if (activeItem) {
      activeItem.classList.remove("header__sort-item--active");
    }
    headerSortItem.classList.add("header__sort-item--active");
  });
});
