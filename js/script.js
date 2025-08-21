const heartBtns = document.querySelectorAll(".home-product-item__like");
const categoryList = document.querySelectorAll(".category-item");

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
