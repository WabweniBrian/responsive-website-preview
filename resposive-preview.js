const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

const previewContainer = qs(".preview-iframe");
const buttons = qsa(".btn");
const form = qs(".form");
const urlInput = qs("#urlInput");

buttons[buttons.length - 1].classList.add("active");

urlInput.onclick = () => urlInput.select();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!urlInput.value) {
    alert("Please enter a url");
    return;
  }
  const url = urlInput.value;
  previewContainer.src = url;
});

const removeActiveClass = () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeActiveClass();
    btn.classList.add("active");
    if (btn.classList.contains("mobile-button")) {
      previewContainer.classList.add("mobile-view");
      previewContainer.classList.remove("tablet-view", "desktop-view");
    } else if (btn.classList.contains("tablet-button")) {
      previewContainer.classList.add("tablet-view");
      previewContainer.classList.remove("mobile-view", "desktop-view");
    } else {
      previewContainer.classList.add("desktop-view");
      previewContainer.classList.remove("mobile-view", "tablet-view");
    }
  });
});
