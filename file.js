// * * * Backdrop script * * *
const backdrop = document.querySelector(".backdrop");
const orderBtn = document.querySelector(".order-button");
const closeBackdrop = document.querySelector(".close-btn");

const backdropOpen = () => {
  backdrop.classList.add("is-open");
};

const backdropClose = () => {
  backdrop.classList.remove("is-open");
};

orderBtn.addEventListener("click", backdropOpen);

closeBackdrop.addEventListener("click", backdropClose);

// * * * Mobile menu * * *

const mobileMenu = document.querySelector(".mobile-menu");
const openMobileMenu = document.querySelector(".close-btn-menu");
const closeMobileMenu = document.querySelector(".burger-close-btn");

const mobileMenuOpen = () => {
  mobileMenu.classList.add("is-open");
};

const mobileMenuClose = () => {
  mobileMenu.classList.remove("is-open");
};

openMobileMenu.addEventListener("click", mobileMenuOpen);
closeMobileMenu.addEventListener("click", mobileMenuClose);
