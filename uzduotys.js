/**
 * Task 1: Calculate the sum of an array of numbers using the reduce method.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} - The sum of the array elements.
 * Example: [1, 2, 3] => 6
 */

function sumArray(numbers) {
const result = numbers.reduce((acc, num) => acc + num, 0 );
return result 
}
const exampleArray = [1,2,3]
console.log(sumArray(exampleArray))

  /**
   * Task 2: Find the maximum value in an array using the reduce method.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The maximum value in the array.
   * Example: [1, 2, 3] => 3
   */

function findMaxNumber(numbers){
    const result = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
    return result
}
const maxNumber = [1,2,3,4,5];
console.log(findMaxNumber(maxNumber))
    /**
   * Task 3: Combine an array of strings into a single string using the reduce method.
   * @param {string[]} strings - An array of strings.
   * @returns {string} - The concatenated string.
   * Example: ['Hello', ', ', 'world', '!'] => 'Hello, world!'
   */
      
    function concatenateStrings(strings){
        const result = strings.reduce((concatenate, string) => concatenate + string, '')
        return result;
    }
const string = ['Hello', ', ', 'world', '!'] 
console.log(concatenateStrings(string))

  /**
   * Task 4: Count the occurrences of each element in an array using the reduce method.
   * @param {Array} array - An array of elements.
   * @returns {Object} - An object where keys are elements and values are their occurrences.
   * Example: ['a', 'b', 'a', 'c', 'b'] => { a: 2, b: 2, c: 1 }
   */

  function countArray(array){

  
  count[element] = (count[element] || 0) + 1;
  return count;
  }

  /**
   * Task 5: Reverse a string using the reduce method.
   * @param {string} str - The input string.
   * @returns {string} - The reversed string.
   * Example: 'hello' => 'olleh'
   */
    
  /**
   * Task 6: Calculate the average of an array of numbers using the reduce method.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The average of the array elements.
   * Example: [1, 2, 3] => 2
   */

    /**
   * Task 7: Filter out odd numbers from an array using the reduce method.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number[]} - An array containing only even numbers.
   * Example: [1, 2, 3, 4, 5] => [2, 4]
   */

  /**
   * Task 8: Group an array of strings by their length using the reduce method.
   * @param {string[]} strings - An array of strings.
   * @returns {Object} - An object where keys are string lengths and values are arrays of strings of that length.
   * Example: { 3: ['foo', 'bar'], 5: ['hello', 'world'] }
   */

 