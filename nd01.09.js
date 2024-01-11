let a = 10;
let b = 15;
let c = 20;

function triangleArea(a, b, c){
let triangleAreaCalculation = 0.25 * Math.sqrt( (a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c) );
return triangleAreaCalculation
}
triangleArea();
console.log(triangleArea(10,15,20))

arrow budas:
let triangleArea = (a, b, c) => 0.25 * Math.sqrt( (a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c) );
console.log(triangleArea(10,15,20));

let a = [2,4,6,8,9];
// console.log(a.Number(a[0]))
// let makingToString = a.toString(a[0]);
// console.log(makingToString)


// for (let i=0; i < a.lenght; i++){
//   let firstNumber = (parseInt(a.toString(a[i]).slice(0,1)))
    
//     return = result
//   } 




let firstNumber = (parseInt(a.toString(a[0]).slice(0,1)))
// let firstNumber = parseInt(makingToString.slice(0,1));
// let numberA =parseInt(a.toString(a[0]));
console.log(firstNumber)

let secondNumber = (parseInt(a.toString(a[0]).slice(2,3)))
console.log(secondNumber)
