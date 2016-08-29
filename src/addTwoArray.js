/**
 * Write a function to add two arrays of numbers
 * Array could be of different length
 */

function addArray(array1, array2) {
    let longArr  = array2,
        shortArr = array1;

    if(array1.length > array2.length) {
        longArr = array1;
        shortArr = array2;
    }

    return longArr.map((value, index) => {
        if(typeof shortArr[index] !== 'undefined') {
            return value + shortArr[index];
        }

        return value;
    })
}
