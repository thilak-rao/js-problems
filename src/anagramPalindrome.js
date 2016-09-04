/**
 * Check if any anagram of a given string contains a palindrome.
 * @param string
 * @returns {boolean}
 */
function palindromePossible(string) {
    const chars = string.split('');
    let existing = new Map();

    chars.forEach((value) => {
        if(!existing.has(value)) {
            existing.set(value, 1);
        } else {
            let val = existing.get(value) + 1;
            existing.set(value, val);
        }
    });

    let counter  = 0,
        isEven   = chars.length % 2 === 0,
        possible = true,
        mid      = isEven ? 1 : 0;

    existing.forEach((value) => {
        if(!counter) {
            counter = value;
            return;
        }

        if(!isEven) {
            if (!mid && value === 1) {
                mid = value;
                return;
            }
        }

        if(value !== counter) {
            possible = false;
        }
    });

    return possible;
}

console.log(palindromePossible('aabcc')); // True
console.log(palindromePossible('aaabbb')); // True
console.log(palindromePossible('hello')); // False
console.log(palindromePossible('aaaabbabbb')); // True
