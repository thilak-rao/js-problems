/**
 * Write a function that flattens an Array of Array objects into a flat Array.
 * Your function must only do one level of flattening.
 * @param array
 * @returns array
 */
function flatten(array) {
    if(!array.length) {
        return array;
    }

    let output = [];
    array.forEach((value) => {
        output = output.concat(value);
    })

    return output;
}

console.log(flatten([])); // Expect [];
console.log(flatten([1, 2, 3])); // Expect [1, 2, 3]
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])); // Expect [1, 2, 3, "a", "b", "c", 1, 2, 3]
