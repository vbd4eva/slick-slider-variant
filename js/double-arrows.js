document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("js-double-arrow-animate")) return;
  e.target.classList.add("double-arrow--animate");
  setTimeout(() => {
    e.target.classList.remove("double-arrow--animate");
  }, 1000);
});