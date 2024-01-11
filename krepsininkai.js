// // Krepšininkų uždavinys
// let krepsininkai = [23, 9, 11, 57, 69];
// let ugiai = [211, 195, 199, 215, 191];
// let dvitaskiai = [15, 20, 98, 14, 48];
// let tritaskiai = [2, 5, 6, 1, 2];

//raskite vidutini krepsininku ugi?  ATS.: 202.2


let ugiai = [211, 195, 199, 215, 191];
let sum = 0 
for ( let i = 0; i < ugiai.length; i++){
    sum = sum + ugiai[i];
}
let average = sum / ugiai.length;

// console.log(average)

// // raskite kiek krepsininku yra didesni uz vidutini krepsninku ugi? ATS.: 2
let count = 0;
for (let i = 0; i < ugiai.length; i++){
if (ugiai[i] > average ){
 count++;
    } 
}
console.log(count);

// Raskite aukščiausio krepšininko dvitaškių skaičių? ATS.: 14

let ugiai = [211, 195, 199, 215, 191];
let dvitaskiai = [15, 20, 98, 14, 48];

let auksciausias = Math.max(...ugiai);
console.log(auksciausias);
 console.log(dvitaskiai[ugiai.indexOf(auksciausias)]) 

// Raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr.? ATS.: 2 ir 69

let ugiai = [211, 195, 199, 215, 191];
 let krepsininkai = [23, 9, 11, 57, 69];
 let tritaskiai = [2, 5, 6, 1, 2];

let ugiai = [211, 195, 199, 215, 191];
 let krepsininkai = [23, 9, 11, 57, 69];
 let tritaskiai = [2, 5, 6, 1, 2];

let zemiausiaisKrepsininkas = Math.min(...ugiai);
console.log(zemiausiaisKrepsininkas)
let statistikaKrepsininko = 'marskineliai='+(krepsininkai[ugiai.indexOf(zemiausiaisKrepsininkas)])+' tritaskiai =' + (tritaskiai[ugiai.indexOf(zemiausiaisKrepsininkas)]);
console.log(statistikaKrepsininko)

