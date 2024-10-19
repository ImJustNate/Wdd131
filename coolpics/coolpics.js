const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize(){
  let screen = window.innerWidth
  console.log(screen)

  const menu = document.querySelector(".menu");

  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

function closer_viewer() {
  const closing_viewer = document.querySelector(".viewer-img");
  closing_viewer.classList.toggle(".hide");
}

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
          <button class="close-viewer">X</button>
          <img class="viewer-img" class="hide" src="${pic}" alt="${alt}">
          </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
  const img_targeted_element = event.target;
	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

}

closer_viewer();

handleResize();
window.addEventListener("resize", handleResize)
const close_viewer = document.querySelector(".close-viewer");
close_viewer.addEventListener("click", closer_viewer);