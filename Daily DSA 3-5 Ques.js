// Q1.
// const sumArray = (array) => {
//     let sum = 0
//     for(let x = 0; x < array.length; x++) {
//         sum = sum + array[x]
//     }
//     return sum
// }

// console.log(sumArray([1,2,3,4,5]))

// Q2. [2, 4, 6, -1, 8, 10] Output = -1

// const output = (array) => {
// let x = 0
// while (x < array.length && array[x] >= 0) {
//     x = x + 1
// }
// return x < array.length ? array[x] : "No Negative No. Found"
// }

// console.log(output([2, 4, 6, -1, 8, 10]))

// Q3. Array Traversing = [1,2,3,4,5]

// const arrayTraversing = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         console.log(`Array Index ${x} of ${array[x]}`)
//     }
// }

// arrayTraversing([1,2,3,4,5])

/* Q4. Insert an Element in an Array (at a given index)
 Array = [1, 2, 4, 5], element = 3, index = 2 */

// const insertELM = (array) => {
//     let element = 3
//     let position = 2
//     for(let x = array.length-1; x >= 0; x--) {
//         if(x >= position) {
//             array[x + 1] = array[x]
//             if(x == position) {
//                 array[x] = element
//             }
//         }
//     } return array
// }

// console.log(insertELM([1,2,4,5]))

/* Q5. Insert an Element at the End of the Array:
Array = [1,2,3] element = 4 Output: [1,2,3,4] */

// const Shift = (array) => {
//     let arrPosition = array.length
//     let shiftELM = 4
//     array[arrPosition] = shiftELM
//     return array

// }

// console.log(Shift([1,2,3]))

// Q.6 Delete Element from an array

// const DeleteElement = (array) => {
//     let deletePosition = 2
//     for(let x = deletePosition; x < array.length; x++) {
//         array[x] = array[x+1]
//     }
//      array.length = array.length-1
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

// Q7. Linear Search / Search Element

// const searchElement = (array) => {
//     let search = 3
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == search) {
//             let findOut = array[x]
//             return findOut
//         }
//     } return array
// }

// console.log(searchElement([1,2,3,4,5]))

/* Q8. Insert an Element at a Specific Index Array: [10, 20, 30, 40, 50]
Element to insert: 25, Index: 2 */

// const insertELM = (array) => {
// let arrayPosition = 2
// let element = 25
// for(let x = array.length-1; x >= arrayPosition; x--) {
//     array[x + 1] = array[x]
// }
// array[arrayPosition] = element
// return array
// }

// console.log(insertELM([10, 20, 30, 40, 50]))

/* Q9. Delete an Element by Value Array: [1, 2, 3, 4, 5, 3] Element to delete: 3 */

// const DeleteElement = (array) => {
//     let element = 3
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             for(let y = x; y < array.length; y++) {
//                 array[y] = array[y + 1]
//             }
//             array.length = array.length - 1
//         }
//     }
//     return array
// }

// console.log(DeleteElement([1, 2, 3, 4, 5, 3]))

/* Q10. Linear Search in an Array: [9, 4, 7, 10, 3] Element to search: 7 */

// const LinearSearch = (array) => {
//     let element = 7
//     for(let x = 0; x <= array.length; x++) {
//         if(array[x] == element) {
//             return array[x]
//         }
//     } return array
// }

// console.log(LinearSearch([9, 4, 7, 10, 3]))

/* Q11. Find the Length of an Array Without Using Built-In Length Property '.length'
Input: [1, 2, 3, 4, 5] */

// const findLength = (array) => {
//     let length = 0
//     for(let x = 0; x < array.length; x++) {
//         length++
//     }
//     return length
// }

// console.log(findLength([1, 2, 3, 4, 5]))

// Q12. Find Maximum and Minimum in an Array [3, 1, 4, 5, 2, 9, 7]

// const findMaxMin = (array) => {
//     let max = array[0]
//     let min = array[0]

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] > max) {
//             max = array[x]
//         }
//         if(array[x] < min) {
//             min = array[x]
//         }
//     } return { max, min }
// }

// console.log(findMaxMin([3, 1, 4, 5, 2, 9, 7]))

/* Q13. Count Occurrences of an Element in an Array [2, 3, 3, 5, 3, 7, 8]
Element: 3 */

// const duplicate = (array) => {
//     let Occurrences = 0
//     let element = 3
//     for(let x = 0; x <= array.length; x++) {
//         if(array[x] == element) {
//             Occurrences = array[x]
//         }
//     } return Occurrences
// }

// console.log(duplicate([2, 3, 3, 5, 3, 7, 8]))

// Q14. Find The 2nd Largest Element in an Array [3, 1, 4, 5, 2, 9, 7]

// const maxTwo = (array) => {
//     let max1 = array[0]
//     let max2 = array[0]
//     let max3 = array[0]
//     let max4 = array[0]

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] > max1) {
//             max4 = max3
//             max3 = max2
//             max2 = max1
//             max1 = array[x]
//         }
//         else if(array[x] > max2 && array[x] !== max1) {
//             max4 = max3
//             max3 = max2
//             max2 = array[x]
//         }
//         else if(array[x] > max3 && array[x] !== max2 && array[x] !== max1) {
//             max4 = max3
//             max3 = array[x]
//         }
//     } return {max2}
// }

// console.log(maxTwo([3, 1, 4, 5, 2, 9, 7]))

/* Q15. Insert an Element in a Sorted Array
You are given a sorted array and an element. Write a JavaScript function that
inserts the element in its correct position to maintain the sorted order of the array. The array
may not have space for an extra element, so handle that accordingly by shifting elements. */

// const insertELM = (array) => {
//     let arrayPosition = 2
//     let element = 25
//     for(let x = array.length-1; x >= arrayPosition; x--) {
//             array[x + 1] = array[x]
//         }
//         array[arrayPosition] = element
//         return array
// }

// console.log(insertELM([10, 20, 30, 40, 50]))

/* Q16. Delete an Element by Value
Write a function to delete an element from an array by its value. The function
should remove the element from the array and return the modified array. If the element does
not exist, return a message stating that the element was not found. */

// const DeleteElement = (array) => {
//     let element = 3
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             for(let y = x; y < array.length; y++) {
//                 array[y] = array[y + 1]
//             }
//             array.length = array.length-1
//         }
//     }
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

/* Q17. Find the Index of an Element using Linear Search
Problem: Write a JavaScript function that performs a linear search to find the index of an
element in an array. If the element is not found, return -1. */

// const searchElement = (array) => {
//     let element = 19
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             return [`Index is ${x}, and Value is ${array[x]}`]
//         }
//     }
// }

// console.log(searchElement([5, 8, 12, 19, 23]))

/* Q18. . Array Traversing - Print All Even Numbers
Write a JavaScript function that traverses an array and prints all even numbers. If
no even numbers are found, print a message stating that no even numbers were found. */

// const evenNumber = (array) => {
//     for(let x = 0; x < array.length-1; x++) {
//         if(array[x] % 2 === 0) {
//             console.log(array[x])
//         }
//     }
//     }

// console.log(evenNumber([1, 2, 3, 4, 5, 6, 7]))

// Q19. Find The 2nd Largest Element in an Array [3, 1, 4, 5, 2, 9, 7]

// const secondMax = (array) => {
//     let max1 = array[0]
//     let max2 = array[0]
//     let max3 = array[0]
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] > max1) {
//             max3 = max2
//             max2 = max1
//             max1 = array[x]
//         } else if(array[x] > max2 && array[x] !== max1) {
//             max3 = max2
//             max2 = array[x]
//         }
//     }
//     return max2
// }

// console.log(secondMax([3, 1, 4, 5, 2, 9, 7]))

/* Q20. Insert an Element in a Sorted Array
You are given a sorted array and an element. Write a JavaScript function that
inserts the element in its correct position to maintain the sorted order of the array. The array
may not have space for an extra element, so handle that accordingly by shifting elements. */

// const insertELM = (array) => {
//     let arrPosition = 2
//     let element = 25
//     for(let x = array.length-1; x >= arrPosition; x--) {
//         array[x + 1] = array[x]
//     }
//     array[arrPosition] = element
//     return array
// }

// console.log(insertELM([10, 20, 30, 40, 50]))

/* Q21. Delete an Element by Value
Write a function to delete an element from an array by its value. The function
should remove the element from the array and return the modified array. If the element does
not exist, return a message stating that the element was not found. */

// const DeleteElement = (array) =>{
//     let element = 3
//     let arrPosition;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             arrPosition = x
//         }
//     }
//     for(let x = arrPosition; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length-1
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

/* Q22. Find the Index of an Element using Linear Search
Problem: Write a JavaScript function that performs a linear search to find the index of an
element in an array.  */

// const indexing = (array) => {
//     let element = 3
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             return x
//         }
//     }
// }

// console.log(indexing([1,2,3,4,5]))

/* Q23. . Array Traversing - Print All Even Numbers
Write a JavaScript function that traverses an array and prints all even numbers. If
no even numbers are found, print a message stating that no even numbers were found. */

// const evenNumber = (array) => {
//     let even = [];
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] % 2 === 0) {
//             even[even.length] = array[x]
//         }
//     }
//     return even
// }

// console.log(evenNumber([2,3,4,5,6,7,8]))

// Q24. Merge two arrays (using - FOR - Loop)

// const newArray = (array) => {
//     let data1 = [1,2,3,4,5]
//     let data2 = [6,7,8,9,10]

//     for(x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }
//     return array
// }

// console.log(newArray([]))

/* Q25. Insert an Element in a Sorted Array
You are given a sorted array and an element. Write a JavaScript function that
inserts the element in its correct position to maintain the sorted order of the array. The array
may not have space for an extra element, so handle that accordingly by shifting elements. */

// const insertELM = (array) => {
//     let element = 25
//     let position = 2
//     for(let x = array.length-1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = element
//     return array
// }

// console.log(insertELM([10, 20, 30, 40, 50]))

/* Q26. Delete an Element by Value
Write a function to delete an element from an array by its value. The function
should remove the element from the array and return the modified array. If the element does
not exist, return a message stating that the element was not found. */

// const DeleteElement = (array) => {
//     let element = 3
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             position = x
//         }
//     }
//     for(let x = position; x < array.length-1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

/* Q27. Find the Index of an Element using Linear Search
Problem: Write a JavaScript function that performs a linear search to find the index of an
element in an array.  */

// const searchElement = (array) => {
//     let element = 4
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             return array[x]
//         }
//     }
// }

// console.log(searchElement([1,2,3,4,5]))

/* Q23. . Array Traversing - Print All Even Numbers
Write a JavaScript function that traverses an array and prints all even numbers. If
no even numbers are found, print a message stating that no even numbers were found. */

// const evenNumber = (array) => {
//     let even = []
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] % 2 == 0) {
//             even[even.length] = array[x]
//         }
//     } return even
// }

// console.log(evenNumber([2,3,4,5,6,7,8]))

// Q24. Merge two arrays (using - FOR - Loop)

// const Merge = (array) => {
//     data1 = [1,2,3,4,5]
//     data2 = [6,7,8,9,10]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     return array
// }

// console.log(Merge([]))

// Q25. Array Sorting

// const arraySorting = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(arraySorting([20,55,43,75,15,19,60]))

/* Q25. Insert an Element in a Sorted Array
You are given a sorted array and an element. Write a JavaScript function that
inserts the element in its correct position to maintain the sorted order of the array. The array
may not have space for an extra element, so handle that accordingly by shifting elements. */

// const insertELM = (array) => {
//     let element = 25
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] > element) {
//            position = x
//            break
//         }
//     }

//     for(let x = array.length-1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = element
//     return array
// }

// console.log(insertELM([10,20,30,40,50]))

/* Q26. Delete an Element by Value
Write a function to delete an element from an array by its value. The function
should remove the element from the array and return the modified array. If the element does
not exist, return a message stating that the element was not found. */

// const DeleteElement = (array) => {
//     let element = 3
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length-1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length-1
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

/* Q27. Find the Index of an Element using Linear Search
Problem: Write a JavaScript function that performs a linear search to find the index of an
element in an array.  */

// const searchElement = (array) => {
//     let element = 4
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             return array[x]
//         }
//     }
// }

// console.log(searchElement([1,2,3,4,5]))

/* Q23. . Array Traversing - Print All Even Numbers
Write a JavaScript function that traverses an array and prints all even numbers. If
no even numbers are found, print a message stating that no even numbers were found. */

// const evenNumber = (array) => {
//     let even = []
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] % 2 == 0) {
//             even[even.length] = array[x]
//         }
//     } return even
// }

// console.log(evenNumber([2,3,4,5,6,7,8]))

// Q24. Merge two arrays (using - FOR - Loop)

// const Merge = (array) => {
//     data1 = [1,2,3,4,5]
//     data2 = [6,7,8,9,10]
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }
//     return array
// }

// console.log(Merge([]))

// Q25. Array Sorting

// const arraySorting = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(arraySorting([20,55,43,75,15,19,60]))

// Q 26. Recursion.
// let data = 0
// const Recursion = (x) => {
//     console.log(x)
//     if(x < 5) {
//         Recursion(x++)
//     }
// }
// Recursion(data)

// Q26. calculate factorial

// let num = 5
// const factorial = (items) => {
//     if(items == 0) {
//         return 1
//     }
//     return items * factorial(items - 1)
// }

// console.log(factorial(num))

/* Q27. Insert an Element in a Sorted Array
You are given a sorted array and an element. Write a JavaScript function that
inserts the element in its correct position to maintain the sorted order of the array. The array
may not have space for an extra element, so handle that accordingly by shifting elements. */

// const insertELM = (array) => {
//     let element = 25
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] > element) {
//             position = x
//             break
//         }
//     }

//     for(let x = array.length-1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = element
//     return array
// }

// console.log(insertELM([10,20,30,40,50]))

/* Q28. Delete an Element by Value
Write a function to delete an element from an array by its value. The function
should remove the element from the array and return the modified array. If the element does
not exist, return a message stating that the element was not found. */

// const DeleteElement = (array) => {
//     let element = 3
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length-1
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

/* Q29. . Array Traversing - Print All Even Numbers
Write a JavaScript function that traverses an array and prints all even numbers. If
no even numbers are found, print a message stating that no even numbers were found. */

// const evenNumber = (array) => {
//     let even = []
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] % 2 == 0) {
//             even[even.length] = array[x]
//         }
//     } return even
// }

// console.log(evenNumber([2,3,4,5,6,7,8]))

// Q30. Merge two arrays (using - FOR - Loop)

// const Merge = (array) => {
//     let data1 = [1,2,3,4,5]
//     let data2 = [6,7,8,9,10]
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }
//     return array
// }

// console.log(Merge([]))

// Q31. Array Sorting

// const arraySorting = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(arraySorting([20,55,43,75,15,19,60]))

// Q32. Indirect Recursion

// let money = 100
// let apple = 0
// const buyApple = (x) => {
//     console.log(x)
//     if(x > 0) {
//         buyMore(x)
//     } else {
//         console.log("I don't have more money")
//     }
// }

// const buyMore = (x) =>{
//     buyApple(x-10)
//     console.log("Buy More",  x)
// }

// buyApple(money)

/* Q33. Insert an Element in a Sorted Array
You are given a sorted array and an element. Write a JavaScript function that
inserts the element in its correct position to maintain the sorted order of the array. The array
may not have space for an extra element, so handle that accordingly by shifting elements. */

// const insertELM = (array) => {
//     let element = 25
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] > element) {
//             position = x
//             break
//         }
//     }

//     for(let x = array.length-1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }

//     array[position] = element
//     return array
// }

// console.log(insertELM([10,20,30,40,50]))

/* Q34. Delete an Element by Value
Write a function to delete an element from an array by its value. The function
should remove the element from the array and return the modified array. If the element does
not exist, return a message stating that the element was not found. */

// const DeleteElement = (array) => {
//     let element = 3
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1
//     return array
// }

// console.log(DeleteElement([1,2,3,4,5]))

/* Q35. . Array Traversing - Print All Even Numbers
Write a JavaScript function that traverses an array and prints all even numbers. If
no even numbers are found, print a message stating that no even numbers were found. */

// const evenNumber = (array) => {
//     let even = []
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] % 2 == 0) {
//             even[even.length] = array[x]
//         }
//     } return even
// }

// console.log(evenNumber([2,3,4,5,6,7,8]))

// Q36. Merge two arrays (using - FOR - Loop)

// const Merge = (array) => {
//     data1 = [1,2,3,4,5]
//     data2 = [6,7,8,9,10]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }
//     return array
// }

// console.log(Merge([]))

// Q37. Array Sorting

// const arraySorting = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(arraySorting([20,55,43,75,15,19,60]))

// Q38. Given two sorted arrays, merge them into a single sorted array. Implement this without using additional libraries or functions.

// const Merge = (array) => {
//     data1 = [1,3,5,7]
//     data2 = [2,4,6,8]
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y +1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(Merge([]))

// Q39.  Write a function to find the largest and smallest elements in an unsorted array in a single pass.

// const minmax = (array) => {
//     let min = array[0]
//     let max = array[0]
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] < min) {
//             min = array[x]
//         }
//         if(array[x] > max) {
//             max = array[x]
//         }
//     } return {min, max}
// }

// console.log(minmax([12, 35, 1, 10, 34, 1]))

// Q38. Given an array of integers, where one number is repeated, find the duplicate number. Assume there is exactly one duplicate.

// const duplicate = (array) => {
//     let duplicate;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == array[x]) {
//             duplicate = array[x]
//         }
//     } return duplicate
// }

// console.log(duplicate([1, 3, 4, 2, 2]))

// Q39. You are given an array containing n distinct numbers taken from the range 1 to n+1. Find the missing number.

// const missing = (array) => {
//     let missing;
//     let n = 0
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] !== n++) {
//            missing = n
//         }
//     } return missing
// }

// console.log(missing([1, 2, 4, 6, 3, 7, 8]))

// Q40. You are given an array of integers array[]. Your task is to reverse the given array.

// const reverse = (array) => {
//     let reversed = []
//     for(let x = array.length-1; x >= 0; x--) {
//         reversed[reversed.length] = array[x]
//     } return reversed
// }

// console.log(reverse([1, 4, 3, 2, 6, 5]))

/* Q41. Given an array array. Your task is to find the minimum and maximum elements in the array.
    Note: Return an array that contains two elements the first one will be a minimum element and the second will be a maximum of an array */

// const minmax = (array) => {
//     let min = array[0]
//     let max = array[0]
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] < min) {
//             min = array[x]
//         }
//         if(array[x] > max) {
//             max = array[x]
//         }
//     } return {min, max}
// }

// console.log(minmax([3, 2, 1, 56, 10000, 167]))

// Q42. Given an array array[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array. K = 3

// const k-num = (array) => {
//     min = array[0]
//     min2 = array[0]
//     min3 = array[0]
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] < min) {
//             min3 = min2
//             min2 = min
//             min = array[x]
//         } else if(array[x] < min2 && array[x] !== min) {
//             min2 = min3
//             min2 = array[x]
//         } else if(array[x] < min3 && array[x] !== min && min2) {
//             min3 = array[x]
//         }
//     } return min3
// }

// console.log(k-num([7, 10, 4, 3, 20, 15]))

// Q43.Given an array, array of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

// const search = (array) => {
//     let element = 4
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             return x
//         }
//     }
//     return -1
// }

// console.log(search([10, 8, 30, 4, 5, 125]))

// Q44. Given two sorted arrays, merge them into a single sorted array. Implement this without using additional libraries or functions.

// const Merge = (array) => {
//     data1 = [1,3,5,7]
//     data2 = [2,4,6,8]
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }
//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(Merge([]))

// Q45. Given an array array[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// const sorted = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(sorted([0, 1, 2, 0, 1, 2]))

// Q46. An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// const sorted = (array) => {
//     let x = 0
//     for(let y = 0; y < array.length; y++) {
//         if(array[y] < 0) {
//             let temp = array[x]
//             array[x] = array[y]
//             array[y] = temp
//             x++
//         }
//     } return array
// }

// console.log(sorted([-12, 11, -13, -5, 6, -7, 5, -3, -6]))

/* Q47. Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays.
The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.
Note: Elements of a[] and b[] are not necessarily distinct. */

// const findUnion = (array) => {
//     let a = [1, 2, 3, 4, 5]
//     let b = [1, 2, 3]
//     for(let x = 0; x < a.length; x++) {
//         let isPresent = false

//         for(let y = 0; y < array.length; y++) {
//             if(array[y] === a[x]) {
//                 isPresent = true;
//                 break;
//             }
//         }
//         if(!isPresent) {
//             array[array.length] = a[x]
//         }
//     }

//     for(let x = 0; x < b.length; x++) {
//         let isPresent = false

//         for(let y = 0; y < array.length; y++) {
//             if(array[y] === b[x]) {
//                 isPresent = true
//                 break
//             }
//         }

//         if(!isPresent) {
//             array[array.length] = b[x]
//         }
//     } return array.length

// }

// console.log(findUnion([]))

// Q48. Given an array array, rotate the array by one position in clock-wise direction.

// const rotate = (array) => {
//     lastELM = array[array.length - 1]
//     for(let x = array.length - 1; x > 0; x--) {
//         array[x] = array[x - 1]
//     }
//     array[0] = lastELM
//     return array
// }

// console.log(rotate([1,2,3,4,5]))

// Q49. Reverse an Array With Recursion

// let data = [5, 12, 65, 89, 0]
// let temp;
// const recRev = (data, start, end) => {
//     if(start <= end) {
//         temp = data[start]
//         data[start] = data[end]
//         data[end] = temp
//         recRev(data, start + 1, end - 1)
//     } return data
// }

// console.log(recRev(data, 0, data.length - 1))

// Q50. Merge and Sort Arrays

// const Merge = (array) => {
//     data1 = [1, 3, 5, 7]
//     data2 = [2, 4, 6, 8]
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(Merge([]))

// Q51 Insertion and Deletion Operations.

// const InsertDelete = (array) => {
//     let elementInsert = 60
//     let elementDelete = 30
//     let position;

//     array[array.length] = elementInsert

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length - 1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1
//     return array
// }

// console.log(InsertDelete([10, 20, 30, 40, 50]))

// Q52. Traversing and Searching in an Array

// const searchElement = (array) => {
//     let element = 8
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == element) {
//             return `Index of ${element} : ${x}`;
//         }
//     } return `Index of This Element ${element} not found`;
// }

// console.log(searchElement([2, 4, 6, 8, 10, 12]))

// Q53. Merge and Sort Arrays

// const Merge = (array) => {
//     data1 = [1, 3, 5, 7]
//     data2 = [2, 4, 6, 8]
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }
//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     } return array
// }

// console.log(Merge([]))

// Q54. Insertion and Deletion Operations.

// const Operations = (array) => {
//     // Deletion First
//     let elementDelete = 30
//     let elementInsert = 60
//     let position;
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//             break
//         }
//     }
//     for(let x = position; x < array.length-1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     // Insertion
//     for(let x = array.length-1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q55. Traversing and Searching in an Array

// const search = (array) => {
//     let element = 8
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === element) {
//             return `Index of element ${element} is ${x}`
//         }
//     }
// }

// console.log(search([2, 4, 6, 8, 10, 12]))

// Q56. Merge and Sort Arrays

// const Merge = (array) => {
//     data1 = [1, 3, 5, 7]
//     data2 = [2, 4, 6, 8]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x];
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x];
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(Merge([]))

// Q57. Insertion and Deletion Operations.

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
//     let position;

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q58. Traversing and Searching in an Array

// const searchElement = (array) => {
//     let element = 8
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === element) {
//             return `Index of Element ${element} is ${x}`
//         }
//     }
// }

// console.log(searchElement([2, 4, 6, 8, 10, 12]))

// Q59. Custom Split a String

// function customSplit(str) {
//     let result = [];
//     let temp = '';

//     let hasSpace = str.includes(' ');

//     if (hasSpace) {
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === ' ') {
//                 if (temp) {
//                     result[result.length] = temp;
//                     temp = '';
//                 }
//             } else {
//                 temp += str[i];
//             }
//         }
//         if (temp) {
//             result[result.length] = temp;
//         }
//     } else {
//         for (let i = 0; i < str.length; i++) {
//             result[result.length] = str[i];
//         }
//     }

//     return result;
// }

// console.log(customSplit('Hello World'))
// console.log(customSplit('Hello'))

// Q60. Traversing and Searching in an Array.

// const searchElement = (array) => {
//     let element = 32
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === element) {
//             return `Index on Element of ${element} is ${x}`
//         }
//     }
// }

// console.log(searchElement([2,4,5,6,7,32,67,97,22]))

// Q61. Merge and Sort Arrays

// const Merge = (array) => {
//     data1 = [1, 3, 5, 7]
//     data2 = [2, 4, 6, 8]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(Merge([]))

// Q62. Insertion and Deletion Operations.

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     // Deletion Operations
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length - 1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     // Insertion Operations
//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q63. Reverse a String

// const Reverse = (string) => {
//     function customSplit(str) {
//         let result = [];
//         let temp = '';

//         let hasSpace = str.includes(' ');

//         if (hasSpace) {
//             for (let i = 0; i < str.length; i++) {
//                 if (str[i] === ' ') {
//                     if (temp) {
//                         result[result.length] = temp;
//                         temp = '';
//                     }
//                 } else {
//                     temp += str[i];
//                 }
//             }
//             if (temp) {
//                 result[result.length] = temp;
//             }
//         } else {
//             for (let i = 0; i < str.length; i++) {
//                 result[result.length] = str[i];
//             }
//         }

//         return result;
//     }

//     return customSplit;
// }

// const customSplitFunction = Reverse();

// const reverseString = (str) => {
//     let revertString = [];
//     for(let x = str.length-1; x >= 0; x--) {
//         revertString[revertString.length] = str[x]
//     }

//     revertString.join("")
//     return revertString
// }

// console.log(reverseString(customSplitFunction('hello')))

// Q64. Traversing and Searching in an Array.

// const Searching = (array) => {
//     let element = 32
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === element) {
//             return `Index of Element ${element} = ${x}`
//         }
//     }
// }

// console.log(Searching([2,4,5,6,7,32,67,97,22]))

// Q65. Merge and Sort Arrays

// const Merge = (array) => {
//     let data1 = [1, 3, 5, 7]
//     let data2 = [2, 4, 6, 8]

//     for(let x = 0; x < data1.length; x++) {
//        array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(Merge([]))

// Q66. Insertion and Deletion Operations.

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     // Deletion Operations
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length - 1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     // Insertion Operations
//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q67. Reverse Array With Recursion

// let data = [5, 12, 65, 89, 0];

// const customReverse = (array, start, end) => {
//     if (start <= end) {
//         let temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;
//         customReverse(array, start + 1, end - 1);
//     }
//     return array
// };

// console.log(customReverse(data, 0, data.length - 1))

// Q68. Factorial with Recursion

// const factorial = (data) => {
//     if(data == 0) {
//         return 1
//     }
//     return data * factorial(data - 1)
// }

// console.log(factorial(5))

// 69. Indirect Recursion

// let money = 100
// let totalApple = 0

// const buyApple = (x) => {
//     console.log(x)
//     if(x > 0) {
//         buyMore(x)
//     } else {
//         console.log("I don't have more money", totalApple)
//     }
// }

// const buyMore = (x) => {
//     buyApple(x - 10)
//     console.log(`Buy More ${x}`)
// }

// buyApple(money)

// 70. Reverse Array With Recursion

// let data = [5, 12, 65, 89, 0];
// const Reverse = (array, start, end) => {
//   if (start <= end) {
//     let temp = array[start];
//     array[start] = array[end];
//     array[end] = temp;
//     Reverse(array, start + 1, end - 1);
//     }
//     return array
// };

// console.log(Reverse(data, 0, data.length - 1));

// Q71. Factorial with Recursion

// const Factorial = (data) => {
//     if(data == 0) {
//         return 1
//     }
//     return data * Factorial(data-1)
// }

// console.log(Factorial(5))

// 72. Reverse Array With Recursion

// let data = [2,4,5,6,7,32,67,97,22]

// const Reverse = (array, start, end) => {
//     if(start <= end) {
//         let temp = array[start]
//         array[start] = array[end]
//         array[end] = temp
//         Reverse(array, start+1, end-1)
//     }
//     return array
// }

// console.log(Reverse(data, 0, data.length-1))

// Q73. Factorial with Recursion

// const Factorial = (data) => {
//     if(data == 0) {
//         return 1
//     }
//     return data * Factorial(data - 1)
// }

// console.log(Factorial(5))

// Q74. Indirect Recursion

// let money = 100
// let applePrice = 10
// let totalApple = 0
// const buyApple = (x) => {
//     if(x > 0) {
//         console.log(`Current Money ${x}`)
//         totalApple++
//         buyMore(x - applePrice)
//     }
// }

// const buyMore = (x) => {
//     console.log(`After Purchased Money Left ${x}, Total Apple : ${totalApple}`)
//     buyApple(x)
// }

// buyApple(money)

// Q75. Insertion and Deletion Operations.

// const Operations = (array) =>{
//     let elementDelete = 30
//     let elementInsert = 60
//     // Deletion Operations
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length - 1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     // Insertion Operations
//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10,20,30,40,50]))

// Q76. stack Implementation

// let data = [];
// let currentSize = data.length;
// let max = 5;

// const customPush = (newValue) => {
//     if(currentSize >= max) {
//         console.log("Stack is Full")
//     }
//     data[currentSize] = newValue
//     currentSize += 1

// }

// const customPop = () => {
//     if(currentSize > 0) {
//         currentSize -= 1
//         data.length = currentSize
//     } else {
//         console.log("Stack is Already Empty")
//     }
// }

// customPush(10)
// customPush(20)
// customPush(30)
// customPush(40)
// customPush(50)
// customPop()
// customPop()
// customPop()
// customPop()
// customPop()
// customPop()
// console.log(data)

// Q77. Merge and Sorting

// const Merge = (array) => {
//     let data1 = [8,6,2,7,3]
//     let data2 = [80,16,25,17,30,11]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(Merge([]))

// Q78. Indirect Recursion

// let money = 100
// let applePrice = 10
// let totalApple = 0

// const buyApple = (x) => {
//     if(x > 0) {
//         console.log(`Current Money ${x}`)
//         buyMore(x - applePrice)
//     }
// }

// const buyMore = (x) => {
//     totalApple++
//     console.log(`After Purchased Money Left ${x} Total Apple : ${totalApple}`)
//     buyApple(x)
// }

// buyApple(money)

// Q79. Insertion and Deletion Operations.

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
//     // Delete Operations
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length - 1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     // Insertion Operations
//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q80. Merge and Sorting

// const Merge = (array) => {
//     let data1 = [8,6,2,7,3]
//     let data2 = [80,16,25,17,30,11]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(Merge([]))

// Q81. Indirect Recursion

// let money = 100
// let applePrice = 10
// let totalApple = 0

// const buyApple = (x) => {
//     if(x > 0) {
//         console.log(`Current Money ${x}`)
//         buyMore(x - applePrice)

//     }
// }

// const buyMore = (x) => {
//     totalApple = totalApple + 1
//     console.log(`After Purchased Money Left ${x} And, Total Apple : ${totalApple}`)
//     buyApple(x)
// }

// buyApple(money)

// Q82. Reverse Array With Recursion

// let data = [2,4,5,6,7,32,67,97,22]

// const Reverse = (array, start, end) => {
//     if(start < end) {
//         let temp = array[start]
//         array[start] = array[end]
//         array[end] = temp
//         Reverse(array, start + 1, end - 1)
//     }
//     return array
// }

// console.log(Reverse(data, 0, data.length-1))

// Q83. stack Implementation

// let stack = [];
// let currentSize = stack.length;
// let max = 5;

// const customPush = (newValue) => {
   
//   if(currentSize >= max) {
//     console.log(`Stack Full`)
//     return
//   }
//   stack[currentSize] = newValue;
//   currentSize += 1;
// };

// const customPop = () => {
    
//     if(stack.length === 0) {
//       console.log(`Stack is Already Empty`)
//       return
//     }
//     currentSize -= 1;
//     stack.length = currentSize
// };

// customPush(10);
// customPush(20);
// customPush(30);
// customPush(40);
// customPush(50);
// customPop();
// customPop();
// customPop();
// customPop();
// customPop();
// customPop();
// console.log(stack)

// Q84. Reverse a Number

// const ReverseNumber = (num, reversed = 0) => {

//   if(num === 0) {
//     return reversed
//   }

//   let lastDigit = num % 10
//   reversed = reversed * 10 + lastDigit
//   return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// Q85. Reverse a String

// const reverseString = (str) => {
//   let reversed = '';
//   for(let x = str.length - 1; x >= 0; x--) {
//     reversed = reversed + str[x]
//   }
//   return reversed
// }

// console.log(reverseString("Hello"))

// Q86. Reverse String With Stack

// let data = []
// let currentSize = data.length


// const customPush = (newValue) => {
//     data[currentSize] = newValue
//     currentSize += 1
// }

// const customPop = () => {
//     let lastRemovedItem = data[currentSize - 1]
//     currentSize -= 1
//     data.length = currentSize
//     return lastRemovedItem
// }

// let str = 'Hello'
// str = str.split("")

// const reverseString = (item) => {
//     for(let x = 0; x < item.length; x++) {
//         customPush(item[x])
//     }

//     for(let x = 0; x < item.length; x++) {
//         item[x] = customPop()
//     }
// } 

// reverseString(str)

// console.log(str.join(""))

// Q87. Reverse String With Stack

// let data = []
// let currentSize = data.length

// const customPush = (newValue) => {
//     data[currentSize] = newValue
//     currentSize += 1
    
// }

// const customPop = () => {
//     let lastDigit = data[currentSize-1]
//     currentSize -= 1
//     data.length = currentSize
//     return lastDigit
// }

// let str = 'Hello'
// str = str.split('')

// const reverseString = (item) => {
//         for(let x = 0; x < item.length; x++) {
//             customPush(item[x])
//         }
    
//         for(let x = 0; x < item.length; x++) {
//             item[x] = customPop()
//         }
//     } 

// reverseString(str)
// console.log(str)

// Q88. Reverse String With Stack

// let data = []
// let currentSize = data.length

// const customPush = (newValue) => {
//     data[currentSize] = newValue
//     currentSize += 1
// }

// const customPop = () => {
//     let lastDigit = data[currentSize - 1]
//     currentSize -= 1
//     data.length = currentSize
//     return lastDigit
// }

// let str = 'Hello'
// str = str.split('')

// const reverseString = (item) => {
//     for(let x = 0; x < item.length; x++) {
//         customPush(item[x])
//     }

//     for(let x = 0; x < item.length; x++) {
//         item[x] = customPop()
//     }
// }

// reverseString(str)
// console.log(str.join(''))

// Q89. Reverse a String

// const reverseString = (string) => {
//     let reversed = ''
//     for(let x = string.length - 1; x >= 0; x--) {
//         reversed = reversed + string[x]
//     }
//     return reversed
// }

// console.log(reverseString("Hello"))

// Q90. Reverse a Number

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor( num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// 2nd Way of Reverse a Number

// const ReverseNumber = (num) => {
//     let numStr = num.toString()
//     let reversed = ''
//     for(let x = numStr.length - 1; x >= 0; x--) {
//         reversed = reversed + numStr[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q91. Merge and Sort Array's

// const MergeSort = (array) => {
//     let data1 = [8,6,2,7,3]
//     let data2 = [80,16,25,17,30,11]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// } 

// console.log(MergeSort([]))

// Q92. Queue with JS.

// let Queue = []
// let currentSize = Queue.length

// const enQue = (newValue) => {
//     Queue[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// enQue(10)
// enQue(20)
// enQue(30)

// const deQue = () => {
//     for(let x = 0; x < Queue.length - 1; x++) {
//         Queue[x] = Queue[x + 1]
//     }
//     Queue.length = Queue.length - 1
// }

// deQue()
// console.log(Queue)

//Q93. Insert and Delete Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q94. Queues in JS

// let Queue = []
// let currentSize = Queue.length

// const enQue = (newValue) => {
//     Queue[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// const deQue = () => {
//     for(let x = 0; x < Queue.length; x++) {
//         Queue[x] = Queue[x + 1]
//     }
//     Queue.length = Queue.length - 1
// }

// enQue(10)
// enQue(20)
// deQue()
// console.log(Queue)

// Q95. Stack in JS

// let stack = []
// let currentSize = stack.length

// const customPush = (newValue) => {
//     stack[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// const customPop = () => {
//     currentSize = currentSize - 1
//     stack.length = currentSize
// }

// customPush(10)
// customPush(20)
// customPush(30)
// customPop()
// console.log(stack)

// Q96. Reverse a Num With Recursion.

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// const ReverseNumber = (num) => {
//     let numStr = num.toString()
//     let reversed = ''
//     for(let x = numStr.length - 1; x >= 0; x--) {
//         reversed = reversed + numStr[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q97. Reverse an Array.

// const ReverseArray = (array) => {
//     let reversed = []
//     for(let x = 0; x < array.length; x++) {
//         reversed[reversed.length] = array[x]
//     }
//     return reversed
// }

// console.log(ReverseArray([10, 20, 30, 40, 50]))

// Reverse an Array With Recursion

// let data = [10, 20, 30, 40, 50]

// const ReverseArray = (array, start, end) => {
//     if(start <= end) {
//         let temp = array[start]
//         array[start] = array[end]
//         array[end] = temp
//         ReverseArray(array, start + 1, end - 1)
//     }
//     return array
// }

// console.log(ReverseArray(data, 0, data.length - 1))


// Q98. Merging and Sorting

// const Merge = (array) => {
//     data1 = [2,7,4,1,5,9]
//     data2 = [20,90,40,70,50,10]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(Merge([]))


// Q99. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q100. stack implementation

// let stack = []
// let currentSize = stack.length

// const customPush = (newValue) => {
//     stack[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// const customPop = (newValue) => {
//     currentSize = currentSize - 1
//     stack.length = currentSize
// }

// customPush(10)
// customPush(20)
// customPop()
// console.log(stack)

// Q101. queue implementation

// let queue = []
// let currentSize = queue.length

// const enQue = (newValue) => {
//     queue[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// const deQue = () => {
//     for(let x = 0; x < queue.length ; x++) {
//         queue[x] = queue[x + 1]
//     }
//     queue.length = queue.length - 1
// }



// enQue(10)
// enQue(20)
// deQue()
// console.log(queue)


//Q102. Reverse Num With Recursion

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }

//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))


// Q103. Binary Search Iterative Approach

// let data = [5, 9, 13, 17]
// let find = 17

// const BinarySearch = (array, start, end) => {
//     let position; 
//     for (start = 0; start <= end; ) {
//         let mid = Math.floor((start + end) / 2);
        
//         if (array[mid] === find) {
//             position = mid;  
//             return position; 
//         } else if (array[mid] < find) {
//             start = mid + 1;  
//         } else {
//             end = mid - 1;  
//         }
//     }
//     return position; 
// }

// console.log(BinarySearch(data, 0, data.length - 1));


// Q104. Binary Search Iterative Approach.
// let data = [5, 9, 13, 17]
// let find = 17
// const BinarySearch = (array, start, end) => {
//     let position;
    
//     for(start = 0; start <= end;) {
//         let mid = Math.floor((start + end) / 2)

//         if(array[mid] === find) {
//             position = mid
//             return position
//         } else if (array[mid] < find) {
//             start = mid + 1
//         } else {
//             end = mid - 1
//         }
//     }
//     return position
// }

// console.log(BinarySearch(data, 0, data.length - 1))

// Q105. Sorting Merging 

// const Merge = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }   
//         }
//     }
//     return array
// }

// console.log(Merge([]))

// Q106. Deletion And Insertion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     for(let x = 0; x < array.length; x++) {
//         if(elementDelete == array[x]) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length -1

//     for(let x = array.length-1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10,20,30,40,50]))


// Q107. Binary Search Iterative Approach.

// let data = [5, 9, 13, 17]
// let find = 17

// const BinarySearch = (array, start, end) => {
//     for(start = 0; start <= end;) {
//         let mid = Math.floor((start + end) / 2)

//         if(array[mid] == find) {
//             position = mid
//             return position
//         } else if (array[mid] < find) {
//             start = mid + 1
//         } else {
//             end = mid - 1
//         }
//     }
// }

// console.log(BinarySearch(data, 0, data.length-1))


// Q108. Reverse a Number With Recursion

// const ReverseNumber = (num, reversed = 0) => {
//     if(num == 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// Q109. Reverse a Number Without Recursion

// const ReverseNumber = (num) => {
//     num = num.toString()
//     let reversed = ''
//     for(let x = num.length-1; x >= 0; x--) {
//         reversed = reversed + num[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q110. Find Out Length Without using .length Property

// const findLength = (num) => {
//     num = num.toString()
//     let Length = 0;

//     for(let x = 0; x < num.length; x++) {
//         if(num !== undefined) {
//             Length++
//         }
//     }

//     return Length
// }

// console.log(findLength(5432109))


// Q111. Use Recursion to Create a Range of Numbers.

// const rangeNumbers = (startNum, endNum) => {
//     if(startNum === endNum) {
//         return [startNum]
//     } else {
//         const result = rangeNumbers(startNum + 1, endNum)
//         result.unshift(startNum)
//         return result;
//     }
// }

// console.log(rangeNumbers(1, 5))

// Q112. Stack Implementation

// let stack = []
// let currentSize = stack.length

// const customPush = (newValue) => {
//     stack[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// customPush(10)
// customPush(20)
// customPush(30)

// const customPop = () => {
//     currentSize = currentSize - 1
//     stack.length = currentSize
// }

// customPop()

// console.log(stack)


// Q113. Queue Implementation

// let queue = []
// let currentSize = queue.length

// const enQue = (newValue) => {
//     queue[currentSize] = newValue
//     currentSize = currentSize + 1
// }

// enQue(10)
// enQue(20)
// enQue(30)

// const deQue = () => {
//     for(let x = 0; x < queue.length; x++) {
//         queue[x] = queue[x + 1]
//     }
//     queue.length = queue.length - 1
//     return queue
// }

// deQue()
// console.log(queue)


// Q114. Merge and Sorting 

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(MergeSort([]))

// Q115. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
    
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q116. Binary Search with Iterative approach

// let data = [8, 17, 29, 50]
// let find = 29

// const BinarySearch = (array, start, end) => {
//     for(start = 0; start <= end;) {
//         let mid = Math.floor((start + end) / 2)

//         if(array[mid] === find) {
//             position = mid
//             return position
//         } else if(array[mid] < find) {
//             start = mid + 1
//         } else {
//             end = mid - 1
//         }
//     }
// }

// console.log(BinarySearch(data, 0, data.length-1))


// Q117. Selection Sorting

// const SelectionSorting = (array) => {
//     let minId;
//     for(let x = 0; x < array.length; x++) {
//         minId = x
//         for(let y = x + 1; y < array.length; y++) {
//             if(array[y] < array[minId]) {
//                 minId = y
//             }
//         }
//         let temp = array[minId]
//         array[minId] = array[x]
//         array[x] = temp
//     }
//     return array
// }

// console.log(SelectionSorting([20, 12, 53, 5]))


//Q118. Binary search Recursive Approach

// let data = [2, 17, 28, 53]
// let find = 53
// const BinarySearch = (array, start, end) => {
//     if(start > end) {
//        return - 1 
//     }

//     let minId = Math.floor((start + end) / 2)

//     if(array[minId] === find) {
//         return minId
//     } else if(array[minId] < find) {
//         return BinarySearch(array, minId + 1, end)
//     } else {
//         return BinarySearch(array, start, minId - 1)
//     }
// }

// console.log(BinarySearch(data, 0, data.length-1))


//Q119. Binary search Approach In JS

// let data = [2, 17, 28, 53]
// let find = 53
// const BinarySearch = (array, start, end) => {
//     for(start = 0; start <= end;) {
//         let minId = Math.floor((start + end) / 2)

//         if(array[minId] === find) {
//             return minId
//         } else if(array[minId] < find) {
//             start = minId + 1
//         } else {
//             end = minId - 1
//         }
//     }
//     return -1
// }

// console.log(BinarySearch(data, 0, data.length-1))


// Q120. Merge and Sort 

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]
    
//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y+ 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(MergeSort([]))


// Q121. Insertion and Deletion Operations In JS.

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q122. Reverse a Num.

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// Q123. Reverse a Num.

// const ReverseNumber = (num) => {
//     num = num.toString()
//     let reversed = '';
//     for(let x = num.length-1; x >= 0; x--) {
//         reversed = reversed + num[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q124. Reverse a String.

// const Reverse = (string) => {
//     let reversed = ''
//     for(let x = string.length-1; x >= 0; x--) {
//         reversed = reversed + string[x]
//     }
//     return reversed
// }

// console.log(Reverse('sanjay'))

// Q125. Reverse an array

// const Reverse = (array) => {
//     let reversed = []
//     for(let x = array.length - 1; x >= 0; x--) {
//         reversed[reversed.length] = array[x]
//     }
//     return reversed
// }

// console.log(Reverse([1,2,3,4,5]))

// Q126. Reverse a Num

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// Q127. Reverse a Num 

// const ReverseNumber = (num) => {
//     num = num.toString()
//     let reversed = ''
//     for(let x = num.length - 1; x >= 0; x--) {
//         reversed = reversed + num[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q128. Merge And Sort

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(MergeSort([]))

// Q129. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] === elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))

// Q130.Selection Sorting in JS

// const SelectionSorting = (array) => {
//     let minId
//     for(let x = 0; x < array.length; x++) {
//         minId = x

//         for(let y = x + 1; y < array.length; y++) {
//             if(array[y] < array[minId]) {
//                 minId = y
//             }
//         }
//         let temp = array[minId]
//         array[minId] = array[x]
//         array[x] = temp
//     }
//     return array
// }

// console.log(SelectionSorting([20, 12, 53, 5]))


// Q131. Merge Sorting 

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp 
//             }
//         }
//     }
//     return array
// }

// console.log(MergeSort([]))


// Q132. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
    
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }

//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q133. Merge and Sort 

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }

//     return array
// }

// console.log(MergeSort([]))


// Q134. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
//     let position;

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }

//     array.length = array.length - 1

//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q135. Selection Sort in JS

// const SelectionSorting = (array) => {
//     let minId;
//     for(let x = 0; x < array.length; x++) {
//         minId = x

//         for(let y = x + 1; y < array.length; y++) {
//             if(array[y] < array[minId]) {
//                 minId = y
//             }
//         }

//         let temp = array[minId]
//         array[minId] = array[x]
//         array[x] = temp
//     }
//     return array
// }

// console.log(SelectionSorting([20, 12, 53, 5]))


// Q136. reverse a num

// const ReverseNumber = (num) => {
//     num = num.toString()
//     let reversed = ''
//     for(let x = num.length - 1; x >= 0; x--) {
//         reversed = reversed + num[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q137. reverse a num with recursion 

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))

// Q138. Reverse a String

// const reverseString = (string) => {
//     let reversed = ''
//     for(let x = string.length - 1; x >= 0; x--) {
//         reversed = reversed + string[x]
//     }
//     return reversed
// }

// console.log(reverseString('Hello'))


// Q139. Reverse a String 

// const reverseString = (string) => {
//     string = string.split('')
//     let reversed = []
//     for(let x = string.length - 1; x >= 0; x--) {
//         reversed[reversed.length] = string[x]
//     }
//     return reversed.join('')
// }

// console.log(reverseString('Hello'))

// Q140. Reverse an Array

// const ReverseArray = (array) => {
//     let reversed = []
//     for(let x = array.length - 1; x >= 0; x--) {
//         reversed[reversed.length] = array[x]
//     }
//     return reversed
// }

// console.log(ReverseArray([1,2,3,4,5]))

// Q141. Selection Sort in JS

// const SelectionSorting = (array) => {
//     let minId
//     for(let x = 0; x < array.length; x++) {
//         minId = x

//         for(let y = x + 1; y < array.length; y++) {
//             if(array[y] < array[minId]) {
//                 minId = y
//             }
//         }

//         let temp = array[minId]
//         array[minId] = array[x]
//         array[x] = temp
//     }
//     return array
// }

// console.log(SelectionSorting([20, 12, 53, 5]))


// Q142. Binary Search Iterative Approach in JS

// let data = [2, 17, 28, 53]
// let find = 53

// const BinarySearch = (array, start, end) => {
//     let position;
//     for(start = 0; start <= end;) {
//         let minId = Math.floor((start + end) / 2)

//         if(array[minId] === find) {
//             position = minId
//             return position
//         } else if (array[minId] < find) {
//             start = minId + 1
//         } else {
//             end = minId - 1
//         }
//     } 
//     return position
// }

// console.log(BinarySearch(data, 0, data.length - 1))


// Q143. Binary Search Recursive Approach in JS

// let data = [2, 17, 28, 53]
// let find = 53

// const BinarySearch = (array, start, end) => {
//     if(start > end) {
//         return - 1
//     }

//    let minId = Math.floor((start + end) / 2)

//    if(array[minId] === find) {
//         return minId
//     } else if(array[minId] < find) {
//         return BinarySearch(array, minId + 1, end)
//     } else {
//         return BinarySearch(array, start, minId - 1)
//     }
// }

// console.log(BinarySearch(data, 0, data.length - 1))

// Q144. Insertion Sort in JS

// const InsertionSort = (array) => {
//     for(let x = 0; x < array.length; x++) {
//         let Current = array[x]
//         let y = x - 1

//         while(y >= 0 && array[y] > Current) {
//             array[y + 1] = array[y]
//             y = y - 1
//         }

//         array[y + 1] = Current
//     }
//     return array
// }

// console.log(InsertionSort([5, 2, 9, 1, 5, 6]))


// Q145. Find Even Value and Make Double Of them and Count Length Manually.

// const EvenValue = (array) => {
//     let newArray = []
//     let count = 0
//     for(let x = 0; x < array.length; x++) {
//         if(array[x] % 2 == 0) {
//             newArray[newArray.length] = (array[x] * 2)
//             count++
//         }
//     }
//     return newArray
// }

// console.log(EvenValue([10, 19, 6, 18, 45, 68, 90, 35, 100]))


// Q146. Merge Sort

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(MergeSort([]))


// Q147. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
//     let position;

//     for(let x = 0; x < array.length; x++) {
//         if(array[x] == elementDelete) {
//             position = x
//         }
//     }

//     for(let x = position; x < array.length - 1; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1
    
//     for(let x = array.length - 1; x >= position; x--) {
//         array[x + 1] = array[x]
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q148. Reverse an Array

// const ReverseArray = (array) => {
//     let reversed = []
//     for(let x = array.length - 1; x >= 0; x--) {
//         reversed[reversed.length] = array[x]
//     }
//     return reversed
// }

// console.log(ReverseArray([1,2,3,4,5]))

// Q149. Reverse an String

// const reverseString = (string) => {
//     let reversed = ''
//     for(let x = string.length - 1; x >= 0; x--) {
//         reversed = reversed + string[x]
//     }
//     return reversed
// }

// console.log(reverseString('Hello World'))


// Q150. Reverse an Number

// const ReverseNumber = (num) => {
//     num = num.toString()
//     let reversed = ''
//     for(let x = num.length - 1; x >= 0; x--) {
//         reversed = reversed + num[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))


// Q151. Reverse an Number - 2nd Way

// const ReverseNumber = (num, reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }

//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))


// Q152. Check String Anagram

// const stringAnagram = (string1, string2) => {
//     let objectString = {}
//     if (string1.length !== string2.length) {
//         return false;
//     }
    
//     string1 = string1.toLowerCase()
//     string2 = string2.toLowerCase()
    
//     for(char of string1) {
//         objectString[char] = (objectString[char] || 0) + 1
//     }
//     for(char of string2) {
//         if (!objectString[char]) {
//             return false;
//         } else {
//             objectString[char]--
//         }
//     }
//     return true;
// }

// console.log(stringAnagram('Hello', 'ehllo'))


// Q153. Selection Sorting

// const SelectionSorting = (array) => {
//     let minId
//     for(let x = 0; x < array.length; x++) {
//         minId = x

//         for(let y = x + 1; y < array.length; y++) {
//             if(array[y] < array[minId]) {
//                 minId = y
//             }
//         }
//         let temp = array[minId]
//         array[minId] = array[x]
//         array[x] = temp

//     }
//     return array
// }

// console.log(SelectionSorting([20, 12, 53, 5]))


// Q154. Binary Search Iterative Approach

// let data = [2, 17, 28, 53]
// let find = 53

// const BinarySearch = (array, start, end) => {
//    for(start = 0; start <= end;) {
//     let minId = Math.floor((start + end) / 2)
//     if(array[minId] == find) {
//         return minId
//     } else if(array[minId] < find) {
//         start = minId + 1
//     } else {
//         end = minId - 1
//     }

//    }
//    return array
// }

// console.log(BinarySearch(data, 0, data.length-1))


// Q155. Binary Search Recursive Approach

// let data = [2, 17, 28, 53]
// let find = 53

// const BinarySearch = (array, start, end) => {
//     if(start > end) {
//         return -1
//     }

//    let minId = Math.floor((start + end) / 2)

//    if(array[minId] === find) {
//         return minId
//    } else if(array[minId] < find) {
//     return BinarySearch(array, minId + 1, end)
//    } else {
//     return BinarySearch(array, start, minId - 1)
//    }

// }

// console.log(BinarySearch(data, 0, data.length - 1))


// Q156. Selection Sorting

// const SelectionSorting = (array) => {
//     let minId
//     for(let x = 0; x < array.length; x++) {
//         minId = x

//         for(let y = x + 1; y < array.length; y++) {
//             if(array[y] < array[minId]) {
//                 minId = y
//             }
//         }
//         let temp = array[minId]
//         array[minId] = array[x]
//         array[x] = temp
//     }
//     return array
// }

// console.log(SelectionSorting([20, 12, 53, 5]))

// Q157. Binary Search Iterative Approach

// let data = [2, 17, 28, 53]
// let find = 53

// const BinarySearch = (array, start, end) => {

//     for(start = 0; start <= end;) {
//         let minId = Math.floor((start + end) / 2)
//         if(array[minId] == find) {
//             return minId
//         } else if(array[minId] < find) {
//             start = minId + 1
//         } else {
//             end = minId - 1
//         }
//     }
//     return array
// }

// console.log(BinarySearch(data, 0, data.length))


// Q158. Binary Search Recursive Approach

// let data = [2, 17, 28, 53]
// let find = 53

// const BinarySearch = (array, start, end) => {
//     if(start > end) {
//         return -1
//     }
    
//     let minId = Math.floor((start + end) / 2)

//     if(array[minId] == find) {
//         return minId
//     } else if(array[minId] < find) {
//         return BinarySearch(array, minId + 1, end)
//     } else {
//         return BinarySearch(array, start, minId - 1)
//     }
// }

// console.log(BinarySearch(data, 0, data.length))


// Q159. string Palindrome Checker

// let data = 'aba'
// let result = true
// const palindrome = (string, start, end) => {
//     for(start = 0; end > start;) {
//         if(string[start] != string[end]) {
//             result = false
//         }
//         start++
//         end--
//     }
//     return result
// }

// console.log(palindrome(data, 0, data.length-1))

// Q160. string Palindrome Checker --- MY WAY..!!

// const palindrome = (string) => {
//     string = string.toLowerCase()
//     let newString = ''

//     for(let x = string.length - 1; x >= 0; x--) {
//         newString = newString + string[x]
//     }

//     if(string === newString) {
//         return `true.! Palindrome String`
//     }
//     return `false.! This is Not Palindrome`
// }

// console.log(palindrome('Level'))


// Q161. Merge Sorting

// const MergeSort = (array) => {
//     let data1 = [5,2,9,3,6]
//     let data2 = [50,20,90,30,60]

//     for(let x = 0; x < data1.length; x++) {
//         array[array.length] = data1[x]
//     }

//     for(let x = 0; x < data2.length; x++) {
//         array[array.length] = data2[x]
//     }

//     for(let x = 0; x < array.length; x++) {
//         for(let y = 0; y < array.length; y++) {
//             if(array[y] > array[y + 1]) {
//                 let temp = array[y]
//                 array[y] = array[y + 1]
//                 array[y + 1] = temp
//             }
//         }
//     }
//     return array
// }

// console.log(MergeSort([]))


// Q162. Insertion and Deletion Operations

// const Operations = (array) => {
//     let elementDelete = 30
//     let elementInsert = 60
//     let position;

//     for(let x = 0; x < array.length; x++) {
//         if(elementDelete == array[x]) {
//             position = x
//             break
//         }
//     }

//     for(let x = position; x < array.length; x++) {
//         array[x] = array[x + 1]
//     }
//     array.length = array.length - 1
    
//     for(let x = array.length - 1; x >= 0; x--) {
//         if(x >= position) {
//             array[x + 1] = array[x]
//             // if(x == position) {
//             //     array[x] = elementInsert
//             // }
//         }
//     }
//     array[position] = elementInsert
//     return array
// }

// console.log(Operations([10, 20, 30, 40, 50]))


// Q163. Creation of MAP in JS

// let data = new Map([
//     ['name', 'sanjay'],
//     [true, 'Bool_Key'],
//     [100, 'hundred']
// ])

// data.set('color', 'blue')
// console.log(`data-size : ${data.size}`)
// console.log(`data-has : ${data.has(100)}`)
// console.log(`data-get : ${data.get(100)}`)
// console.log(data)
// // data.clear()

// Q164. Reverse String 

// const reverseString = (string) => {
//     let reversed = ''
//     for(let x = string.length - 1; x >= 0; x--) {
//         reversed = reversed + string[x]
//     }
//     return reversed
// }

// console.log(reverseString('Hello'))

// Q165. Reverse Array

// const ReverseArray = (array) => {
//     let reversed = []
//     for(let x = array.length - 1; x >= 0; x--) {
//         reversed[reversed.length] = array[x]
//     }
//     return reversed
// }

// console.log(ReverseArray([1,2,3,4,5]))

// Q166. Reverse an Number

// const ReverseNumber = (num) => {
//     num = num.toString()
//     let reversed = ''

//     for(let x = num.length - 1; x >= 0; x--) {
//         reversed = reversed + num[x]
//     }
//     return Number(reversed)
// }

// console.log(ReverseNumber(12345))

// Q167. Reverse an Number -- Recursive Approaches

// const ReverseNumber = (num , reversed = 0) => {
//     if(num === 0) {
//         return reversed
//     }
    
//     let lastDigit = num % 10
//     reversed = reversed * 10 + lastDigit
//     return ReverseNumber(Math.floor(num / 10), reversed)
// }

// console.log(ReverseNumber(12345))


// Q168. Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// const CelsiusToFahrenheit = (Celsius) => {
//     let Fahrenheit = Celsius * (9/5) + 32
//     return Fahrenheit
// }

// console.log(CelsiusToFahrenheit(30))