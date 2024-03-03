// let fruits = ['apple', 'banana', 'orange'];
// let fruit1= fruits;
// // console.log(fruits.splice(1, 1, 'grape', 'kiwi')); 

// console.log(fruits.slice(0, 2)); 
// let fruit2 = fruits.splice(0, 2);
// console.log(fruits);
// console.log(fruit1);
// console.log(fruit2);
- splice(start, deleteCount, item1, item2, ) // Changes the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the array it's called on.

Example:
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape', 'kiwi'); // Removes 1 element at index 1 and adds 'grape' and 'kiwi'
console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange']

- slice(start, end) // Returns a shallow copy of a portion of an array into a new array without modifying the original array.

Example:
let numbers = [1, 2, 3, 4, 5];
let slicedNumbers = numbers.slice(1, 4); // Extracts elements from index 1 to 3
console.log(slicedNumbers); // Output: [2, 3, 4]
console.log(numbers); // Original array is unchanged: [1, 2, 3, 4, 5]