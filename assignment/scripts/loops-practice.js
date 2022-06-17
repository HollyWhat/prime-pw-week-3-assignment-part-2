console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
// We need to chage the middle section to go up to 6
console.log('count from 0 to 5');

for( let i=0; i<6 ; i++){
  console.log("in quesition 1.a", i );
} 

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// we need to change where i starts at and the middle section as well 
console.log('count from 3 to 5');

for(let i=3; i<6 ; i++ ){
  console.log("in question 1.b", i );
}


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
// we need to first find a way to only have the even numbers selected 
// we also need to adjust the beging of th or loop to refrelct the problem at hand
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for(let i=0 ; i<11 ; i++){
  if(i % 2 === 0){
    console.log("in question 1.c", i);
  }
}
//not sure if this is the best method for how to find this solution? 


// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for(let i=5; i>-1; i--) {
  console.log("counting downwards", i );
}



// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
//for of loop 

for( array of stars ){
  console.log("in the for of loop", array );
}// end of for of loop 
//unsure if all that is needed in the loop?



// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
// let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

let starsID = stars.indexOf;

while( starsID ){
  starsID++;
  console.log('in the while loop', starsID );
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let indexA = 0;
let maxA = 6;


while( indexA < maxA ){
  console.log("in while loop 3.b", indexA );
  indexA++;

}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let maxB = 10; 
let min = 5;

while(maxB >= min ){
  console.log("in while loop 3.c", maxB )
  maxB--;
}