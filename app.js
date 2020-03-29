const toogleBtn = document.getElementById("toogle");
const signUpBtn = document.getElementById("open");
const modalCloseBtn = document.getElementById("close");
const model = document.getElementById("modal");

console.log(model);

//Event Listners
toogleBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// Show modal
signUpBtn.addEventListener("click", () => model.classList.add("show-modal"));

// Hide modal
modalCloseBtn.addEventListener("click", () =>
  model.classList.remove("show-modal")
);

// Hide modal on outside click
window.addEventListener("click", e =>
  e.target == model ? model.classList.remove("show-modal") : false
);
