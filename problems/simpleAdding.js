/**
 * Have the function SimpleAdding(num) add up all the numbers from 1 to num.
 * For the test cases, the parameter num will be any number from 1 to 1000.
 *
 * @param num
 * @returns {number}
 */
function simpleAdding(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(simpleAdding(8)); // Output: 36
