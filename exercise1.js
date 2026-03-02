// Exercise 1: Build an Array using a WHile Loop
//Instructions: Create an empty array and use a while loop to add the numbers 1 through 20 to the array. Then, log the array to the console.

// CODE

//Empy Array
testArray = [];
//Counter Variable
let counter = 1;
//While Loop
while (counter <= 20) {
     //Append counter variable to array
    testArray.push(counter);
    counter++;
}
 //Print the array to the console
console.log(testArray);