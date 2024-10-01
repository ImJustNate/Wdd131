
const selector = document.getElementById("button")
const selectedDropDown = document.querySelector('.content');
const myImage = document.getElementById("myImage");

let isDarkMode = false;


selector.addEventListener('click', function() {

    isDarkMode = !isDarkMode;


        if (isDarkMode){
            selectedDropDown.className = 'content dark';
            myImage.src = "byui-logo_white.png";

        } else{
            selectedDropDown.className = 'content';
            myImage.src = "byui-logo_blue.webp";
        }
        x = x + 1;


});