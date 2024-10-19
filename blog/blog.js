const advancedButton = document.querySelector(".advanced");
advancedButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  const filter = document.querySelector("#filters");
  filter.classList.toggle("hide");
}

console.log("ugly2")