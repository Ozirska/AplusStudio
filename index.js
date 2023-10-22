const submitBtn = document.querySelector("#submit");
let modal = document.querySelector(".modal_form");
let modalForm = document.querySelector("form");
let container = document.querySelector(".modal_form");

const showModal = (e) => {
  e.stopPropagation();

  modal.style.display = "block";

  // submitBtn.addEventListener("submit", (e) => {});

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(
      `Data name:${e.target.name.value}, email: ${e.target.email.value}`
    );
    e.target.name.value = "";
    e.target.email.value = "";
  });

  document.querySelector(".cross").addEventListener("click", () => {
    modal.style.display = "none";
  });
  container.addEventListener("click", (e) => {
    // e.stopPropagation();

    if (e.target !== modalForm) {
      if (!modalForm.contains(e.target)) {
        modal.style.display = "none";
        container.style.opacity = "1";
      }
    }
  });
};

let button = document
  .querySelector(".heroBtn")
  .addEventListener("click", showModal);

//////////////////////////////////////////////////////////////////////

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  // loop: true,
  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar

  slidesPerView: 3.3,
  spaceBetween: 10,
});

//////////////////////////////////////////////////////////////

const swiper_review = new Swiper(".swiper_reviews", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  // loop: true,
  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // spaceBetween: 10,
});

////////////////////////////////////////////////////////

const subscribeForm = document.querySelector(".subscribeForm");
const requireText = document.querySelector(".require_text");
const showError = (text) => {
  console.log(text);
  requireText.style.display = "block";
  requireText.textContent = text;
};

const checkEmail = (e) => {
  e.preventDefault();
  if (!e.target.email.value.trim().length) {
    console.log("no");
    return;
  }
  if (
    !e.target.email.value
      .trim()
      .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
  ) {
    showError(`Must be a valid email`);
  } else {
    console.log(`Email: ${e.target.email.value}`);
    requireText.innerText = "";
    e.target.email.value = "";
  }
};

subscribeForm.addEventListener("submit", checkEmail);
