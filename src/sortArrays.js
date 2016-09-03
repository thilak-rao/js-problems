/**
 * Simple Sorting by Ascending Order
 * @param arr
 * @returns {Array.<T>}
 */
function sortArrayAcc(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * Simple Sort by Descending Order
 * @param arr
 * @returns {Array.<T>}
 */
function sortArrayDec(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(sortArrayDec([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sortArrayAcc([9, 8, 7, 6, 5, 4, 3, 2, 1]));
