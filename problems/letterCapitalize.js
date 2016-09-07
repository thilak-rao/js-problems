/**
 * Using the JavaScript language, have the function letterCapitalize(str)
 * take the str parameter being passed and capitalize the first letter of each word.
 * Words will be separated by only one space.

 * @param str
 * @returns {string}
 */
function letterCapitalize(str) {
    let words = str.split(' ');

    words = words.map((word) => {
       return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return words.join(' ')
}

console.log(letterCapitalize('hello world')); // Output: "Hello World"

console.log(letterCapitalize('i ran there')); // Output: "I Ran There"
