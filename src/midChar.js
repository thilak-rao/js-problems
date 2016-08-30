/**
 * You are going to be given a word. Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.
 * @param string
 */
function getMiddle(string) {
    let isEven = false;
    if(string.length % 2 === 0) {
        isEven = true;
    }

    const chars = string.split(''),
          sLen  = chars.length;

    if (isEven) {
        return chars[(sLen/2)-1] + chars[(sLen/2)]
    } else {
        return chars[(sLen-1)/2];
    }
}

console.log(getMiddle("test") ); //should return "es"

console.log(getMiddle("testing")); // should return "t"

console.log(getMiddle("middle")); // should return "dd"

console.log(getMiddle("A")); // should return "A"
