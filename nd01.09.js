let a = 10;
let b = 15;
let c = 20;

function triangleArea(a, b, c){
let triangleAreaCalculation = 0.25 * Math.sqrt( (a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c) );
return triangleAreaCalculation
}
triangleArea();
console.log(triangleArea(10,15,20))
