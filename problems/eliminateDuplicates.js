/**
 * Function that removes duplicates from an array!
 */

function eliminateDuplicates(array) {
    return [...new Set(array)];
}

console.log(eliminateDuplicates([1, 1, 3, 5, 6,7, 8, 3]));
