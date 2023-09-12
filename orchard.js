///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55
;


// PROBLEM 1

/*
    Using for loop, calculate the total number{
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
// added all numbers in the array together to find the total
// found the number at each index by looping through the array by the length of the array
let sumOfFujiAcres = 0;
for (let i = 0; i < fujiAcres.length; i++){
    sumOfFujiAcres += fujiAcres[i];
}
let sumOfGalaAcres = 0;
for (let i = 0; i < galaAcres.length; i++){
    sumOfGalaAcres += galaAcres[i];
}
let sumOfPinkAcres = 0;
for (let i = 0; i < pinkAcres.length; i++){
    sumOfPinkAcres += pinkAcres[i];
}
// add the sum of all 3 types to create the total and print 
totalAcres = sumOfFujiAcres + sumOfGalaAcres + sumOfPinkAcres
console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
//average acers per day was the total acers divded by the number of days in the week
averageDailyAcres = totalAcres / 7;
//and print the average
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/
// i couldnt get the code to work but I understood the logic but couldn't figure out the while loop
// these are the variables given
let acresLeft = 174 
let days = 0
//while acresleft is greater than zero
while (acresLeft > 0){
//you subtract the averagedailyacres from acresleft so it will eventually reach zero
   acresLeft - averageDailyAcres;
//you also need to add 1 to days everytime you have to subtract averagedaily from acresleft
   days++;
   }
//then you print out the number of days you have left once the while loop finishes
console.log(days)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
//used slice command to create a copy of the arrays 
//I did this so I didn't change the values in the original array
var fujiAcres2 = fujiAcres.slice(0, 7)
var galaAcres2 = galaAcres.slice(0, 7)
var pinkAcres2 = pinkAcres.slice(0, 7)
//the map function let me multiply each index by 6.5 and then print the array
//I did this and not just multiply the whole thing by 6.5 was so you can still have the values in the array format
let fujiTons = fujiAcres2.map(x => x * 6.5);
let galaTons = galaAcres2.map(x => x * 6.5);
let pinkTons = pinkAcres2.map(x => x * 6.5);

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
//I used a for loop to add all the numbers from the fujiton array and then multiplied it by 2000 at the end and printed
let fujiPounds = 0;
for (let i = 0; i < fujiTons.length; i++){
    fujiPounds += fujiTons[i] * 2000;
}
console.log(fujiPounds)

let galaPounds = 0;
for (let i = 0; i < galaTons.length; i++){
    galaPounds += galaTons[i] * 2000;
}
console.log(galaPounds)

let pinkPounds = 0;
for (let i = 0; i < pinkTons.length; i++){
    pinkPounds += pinkTons[i] * 2000;
}
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
// I set the new variable to the product of the pounds we found in the last question by the price of the apple and then printed
let fujiProfit = fujiPounds * fujiPrice
console.log(fujiProfit)
let galaProfit = galaPounds * galaPrice
console.log(galaProfit)
let pinkProfit = pinkPounds * pinkPrice
console.log(pinkProfit)



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
// i found the total profit by adding all 3 types of apples profits together and then printing the totalProfit
var totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)
