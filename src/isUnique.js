/**
 * Is Unique?
 * Implement an algorithm to determine if a string has all unique characters.
 */
function isUnique(string) {
    let map = new Map();
    let chars = string.split('');

    let isUnique = true;

    chars.map((value) => {
      if (!map.has(value)) {
          map.set(value, true);
      } else {
          isUnique = false;
      }
    });

    return isUnique;
}

console.log(isUnique('abcdefg'));
console.log(isUnique('aabbccfdefg'));
