/**
 * Is Unique?
 * Implement an algorithm to determine if a string has all unique characters.
 */
function isUnique(string) {
    let map = {};
    let chars = string.split('');

    chars.map((value) => {
      if (typeof map[value] === 'undefined') {
          map[value] = 1;
      } else {
          map[value] += 1;
      }
    });

    let isUnique = true;

    for(const key in map) {
        if (map.hasOwnProperty(key) && (map[key] !== 1)) {
            isUnique = false;
        }
    }

    return isUnique;
}
