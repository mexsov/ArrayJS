// // Krepšininkų uždavinys
// let krepsininkai = [23, 9, 11, 57, 69];
// let ugiai = [211, 195, 199, 215, 191];
// let dvitaskiai = [15, 20, 98, 14, 48];
// let tritaskiai = [2, 5, 6, 1, 2];

//raskite vidutini krepsininku ugi?


let ugiai = [211, 195, 199, 215, 191];
let sum = 0 
for ( let i = 0; i < ugiai.length; i++){
    sum = sum + ugiai[i];
}
let average = sum / ugiai.length;

// console.log(average)

// // raskite kiek krepsininku yra didesni uz vidutini krepsninku ugi?
let count = 0;
for (let i = 0; average < ugiai.length; i++){
if (ugiai[i]>average){
 count++;
    } 
    console.log(ugiai[i])
}
console.log(count);