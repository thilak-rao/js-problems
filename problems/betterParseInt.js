/**
 JavaScript provides a built-in parseInt method.

 It can be used like this:

 parseInt("10") returns 10
 parseInt("10 apples") also returns 10
 We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

 You are asked to write a myParseInt method with the following rules:

 1. It should make the conversion if the given string only contains a single integer value (and eventually spaces - including tabs, line feeds... - at both ends)
 2. For all other strings (including the ones representing float values), it should return NaN
 3. It should assume that all numbers are not signed and written in base 10

 * @param string
 */
function myParseInt(string) {
    string      = string.trim();
    let num     = string.split(''),
        isValid = true,
        output  = '';


    num.forEach((value) => {
        if (isNaN(parseInt(value))) {
            isValid = false;
        } else {
            output += value;
        }
    });

    return isValid ? parseInt(output) : NaN;
}

console.log(myParseInt("5 friends"));
console.log(myParseInt("16.5"));
console.log(myParseInt("1"));
