
document.addEventListener("DOMContentLoaded", () => {
    const vykort = document.querySelector(".vykort");
    vykort.addEventListener("click", () => {
      vykort.classList.toggle("is-flipped");
    });
  });