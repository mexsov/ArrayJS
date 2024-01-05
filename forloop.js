// # Tasks

// 1. Using a for loop, print even numbers from 2 to 20.

for (let i = 2; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2. Using a while loop, print odd numbers from 1 to 15.

let i = 0 ;
while (i < 15) {
    if (i % 2 !== 0){
        console.log(i);
    }
    i++;
}


// 3. Using a for loop, print the numbers from 1 to 100, but only if they are divisible by 7.

for (let i=0; i <101; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// 4. Using a for loop, find the sum of numbers from 1 to 100, but exclude numbers divisible by both 3 and 5.

for (let i=0; i <101; i++) {
    if (i % 3 !== 0 && i % 5 !== 0){
        console.log(i);
    }
}
// 5. Using a for loop, print a pattern of stars in reverse:
function asterix(){
    let row = 5;
    let pagrindas = '';
for (let i=1; i <= row; i++){
    for(let j = 1; j <=i; j++){
        pagrindas += j + ' ';
    }
    console.log(pagrindas);
    pagrindas = '';
}
}
// ```
// *****
// ****
// ***
// **
// *
// ```

// 6. Using a for loop, print a pattern of numbers in a pyramid shape:

// ```
//    1
//   123
//  12345

// ```

// 7. Using a for loop, calculate the factorial of 10.
// 8. Using a while loop, print the numbers from 10 to 1 in reverse order.
// 9. Using a do-while loop, print the numbers from 5 to 1 in reverse order.
// 9. Using a do-while loop, print the numbers from 5 to 1 in reverse order.
// 10. Using a for loop, print a pattern of alternating letters and numbers:
// ```
// A1
// B2
// C3
// D4
// E5

// ```
// 11. Using a for loop, print the numbers from 50 to 1, but only if they are divisible by 5.
// 12. Using a for loop, print numbers from 1 to 100, but replace multiples of 3 with "Three" and multiples of 7 with "Seven".
// 13. Using a for loop, print a pattern of stars:

// ```
//     *
//    ***
//   *****
//  *******
// *********

// ```

// 14. Using a for loop, print a pattern of numbers:

// ```
// 12345
//  1234
//   123
//    12
//     10
// ```
// 15. Using a for loop, print a pattern of letters:

// ```
// ABCDE
//  ABCD
//   ABC
//    AB
//     A

// ```
// 16. Using a for loop, calculate the sum of the first 10 cube numbers.
// 17. Using a while loop, print numbers from 1 to 15, but skip numbers that are multiples of 3.
// 18. Using a do-while loop, print the first 10 natural numbers.
// 19. Using a for loop, find the product of numbers from 1 to 10, but exclude 7.
// 20. Using a for loop, print numbers from 1 to 25, but replace multiples of 4 with "four".
// 21. Using a for loop, print numbers from 1 to 100, but replace multiples of 3 with "Fizz" and multiples of 5 with "Buzz". If a number is both a multiple of 3 and 5, print "FizzBuzz".
// 22. Using a for loop, find and print the sum of all prime numbers between 1 and 50.
// 23. Using a for loop, print the first 10 numbers in the Fibonacci sequence, but start with 0 and 24. Using a for loop, find the product of the first 10 positive even numbers.
// 25. Using nested for loops, print a pattern of stars in a diamond shape:

