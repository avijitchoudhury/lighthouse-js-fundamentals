function calculateRectangleArea (length, width) {
  let rectangle = length * width;
  return rectangle
}

function calculateTriangleArea (base, height) {
  let triangle = base * height / 2;
  return triangle
}

function calculateCircleArea (radius) {
  let circle = Math.PI * radius^2;
  return circle
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined
