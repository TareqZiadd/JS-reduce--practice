//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)

/*
//ex1 without initial value
let nums = [10, 20, 15, 30];   
let add = nums.reduce(function(total, currentValue, index, arr) {
    return total + currentValue;
});
console.log(add);  //75
*/

/*
//ex2 with initial value
let nums = [10, 20, 15, 30];   
let add = nums.reduce(function(total, currentValue, index, arr) {
    return total + currentValue; 
}, 10);
console.log(add); //85 
*/

/*ex4  : excellent example 
const arr = [20, 30, 40];
const result = arr.reduce(function(accumulator, value) {
    const newValue = value + 20; // adding 20 to each element
    console.log(`Accumulator: ${accumulator}, Current Value: ${value}, New Value: ${newValue}`);
    return accumulator + newValue;
}, 0);
console.log("Final Result:", result); // Output: 170
// Accumulator: 0, Current Value: 20, New Value: 40
// Accumulator: 40, Current Value: 30, New Value: 50
// Accumulator: 90, Current Value: 40, New Value: 60
// Final Result: 170
*/

//ex5
/*
let nums = [10, 20, 15, 30];   
let add = nums.reduce(function(total, currentValue, index, arr) {
    console.log(`total => ${total}`);
    console.log(`Current Value => ${currentValue}`);
    console.log(`Current Value Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(`total + Current => ${total + currentValue}`);
    console.log('#####');
    return total + currentValue;
}, 0);
console.log(add);

*/

/*
total => 0
Current Value => 10
Current Value Index => 0
Array => 10,20,15,30
total + Current => 10
#####
total => 10
Current Value => 20
Current Value Index => 1
Array => 10,20,15,30
total + Current => 30
#####
total => 30
Current Value => 15
Current Value Index => 2
Array => 10,20,15,30
total + Current => 45
#####
total => 45
Current Value => 30
Current Value Index => 3
Array => 10,20,15,30
total + Current => 75
#####
Total Sum => 75
*/


/*ex6
const numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(numbers.reduce(getSum, 0)); //24
//Each time it will be added by rounding to the nearest number//16+2+1+5 =24
*/
