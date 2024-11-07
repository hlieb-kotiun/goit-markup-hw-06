// * * * Backdrop script * * *

const backdrop = document.querySelector(".backdrop");
const orderBtn = document.querySelector(".order-button");
const closeBackdropBtn = document.querySelector(".close-btn");

orderBtn.addEventListener("click", openBackdrop);
closeBackdropBtn.addEventListener("click", closeBackdrop);

function openBackdrop(event) {
  backdrop.classList.add("is-open");
}

function closeBackdrop(event) {
  backdrop.classList.remove("is-open");
}

// // * * * Mobile menu * * *

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const openMobileMenu = document.querySelector(".close-btn-menu");
const closeMobileMenu = document.querySelector(".burger-close-btn");

openMobileMenu.addEventListener("click", mobileMenuOpener);
mobileMenuContainer.addEventListener("click", mobileMenuCloser);

function mobileMenuOpener() {
  mobileMenu.classList.add("is-open");
}

function mobileMenuCloser(event) {
  if (
    !event.target.classList.contains("mobile-nav-list-link") &&
    !event.target.closest(".burger-close-btn")
  ) {
    return;
  }

  mobileMenu.classList.remove("is-open");
}

// * * * Modal form * * *

const form = document.querySelector(".modal-form");

form.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const userName = event.target.elements.username.value;
  const userNumber = event.target.elements.usertel.value;
  const userEmail = event.target.elements.useremail.value;

  if (userName === "" || userNumber === "" || userEmail === "") {
    return alert("Please fill all the filds!");
  }
  userData.name = userName;
  userData.number = userNumber;
  userData.userEmail = userEmail;

  form.reset();
}

const userData = {};

console.log(userData.name);
