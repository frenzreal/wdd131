const mainnav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
  document.querySelector("h1").classList.toggle("hide");
});
