/**
 * Given two arrays a and b write a function comp(a, b)
 * that checks whether the two arrays have the "same" elements,
 * with the same multiplicities. "Same" means, here, that the elements
 * in b are the elements in a squared, regardless of the order.
 *
 * @param array1
 * @param array2
 * @returns {boolean}
 */

function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
    }

    let hasSquared = true;
    array1         = new Set(array1);
    array2         = new Set(array2);

    if (array1.length !== array2.length) {
        return false;
    }

    array1.forEach((value) => {
        if (value === 0 || typeof value !== 'number') {
            return;
        } else if (value === 1 && array2.has(1)) {
            return;
        }

        const hasNoMultiple = !(array2.has(value * value));

        if (hasNoMultiple) {
            hasSquared = false;
        }
    });

    return hasSquared;
}

/**
 Valid arrays:
 a = [121, 144, 19, 161, 19, 144, 19, 11]
 b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

 comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144,
 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

 a = [121, 144, 19, 161, 19, 144, 19, 11]
 b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

 Invalid arrays:
 **/

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

console.log(`Test ${comp(a1, a2) === true ? 'Pass' : 'Failed'}`);

a1 = [95, 44, 56, 1, 28, 95, 66, 36];
a2 = [9025, 1936, 3137, 1, 784, 9025, 4356, 1296];

console.log(`Test ${comp(a1, a2) === false ? 'Pass' : 'Failed'}`);

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = ['string', 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

console.log(`Test ${comp(a1, a2) === false ? 'Pass' : 'Failed'}`);
