const heartBtns = document.querySelectorAll(".home-product-item__like");
const categoryList = document.querySelectorAll(".category-item");
const headerSortList = document.querySelectorAll(".header__sort-item");
const checkbox = document.querySelector('.header__mobile-nav-checkbox');
const mobileNotification = document.querySelector('.header__mobile-nav--notification');
const mobileNotifyList = document.querySelector('.header__mobile-notify');
const closeNotifyList = document.querySelector('.header__mobile-notify-close');

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

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('nav-open');
  } else {
    document.body.classList.remove('nav-open');
  }
});

mobileNotification.addEventListener('click', function() {
  checkbox.checked = false;
  mobileNotifyList.classList.add('header__mobile-notify--active');
});

closeNotifyList.addEventListener('click', function() {
  mobileNotifyList.classList.remove('header__mobile-notify--active');
  window.location.href = "";
});
