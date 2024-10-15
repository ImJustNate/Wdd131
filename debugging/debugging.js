const pi = 3.14;
let radius = 3;
let area = 0;

// function circleArea(radius) {
// area = radius * radius * pi;
// console.log("Area: " + area)  
// }

function circleArea(radius) {
     area = radius * radius * pi;
     console.log();
     return area
}
console.log(area)

// area = radius * radius * pi;
// console.log("Area: " + area)
// radius = 4;
// area = radius * radius * pi;
// console.log("Area: " + area)


area = circleArea(3);
console.log(area);