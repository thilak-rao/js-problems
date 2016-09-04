/**
 * Write a function longestWord(sen) take the sen parameter being passed
 * and return the largest word in the string.
 * If there are two or more words that are the same length,
 * return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 *
 * @param sen
 * @returns {string}
 */
function longestWord(sen) {
    const words = sen.split(' ');

    let len  = 0,
        word = '';

    words.map((val) => {
        val = val.replace(/[^a-zA-Z ]/g, "");

        if (val.length > len) {
            word = val;
            len  = val.length
        }
    });

    return word;
}

console.log(longestWord('fun&!! time')); // Output: "time"
console.log(longestWord('I love dogs')); // Output: "love"


