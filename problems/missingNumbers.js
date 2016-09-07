/**
 * Function that returns all the missing numbers in an array.
 * Goes from the lowest till the highest.
 *
 * @param array
 * @returns {Array}
 */
function missingNumbers(array) {
    array = array.sort();
    let numbers = new Set(array),
        missing = [];

    for (let i = 0, start = array[0]; start < array[array.length - 1]; i++) {
        if (!numbers.has(start)) {
            missing.push(start);
        }
        start++;
    }

    return missing;
}

console.log(missingNumbers([1, 2, 4, 5, 6, 7, 9]));
