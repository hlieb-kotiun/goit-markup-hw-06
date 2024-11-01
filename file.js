// * * * Backdrop script
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
