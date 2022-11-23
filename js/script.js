const toggler = document.querySelector(".fa-solid.fa-bars");
const navigationAndCta = document.querySelectorAll("header .hidden");
toggler.addEventListener("click", () => {
  navigationAndCta.forEach((x) => x.classList.toggle("hidden"));
});
