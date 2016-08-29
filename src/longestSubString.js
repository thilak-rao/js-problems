/**
 * Check for the longest continuous substring, of any given string.
 * @param string
 * @returns {string}
 */
function longestSubString(string) {
    let chars   = string.split(''),
        map     = {},
        current = chars[0];


    chars.forEach((value) => {
        if(current !== value) {
            current = value;
            map[value] = 1;
        } else {
            if(typeof map[value] === 'undefined') {
                map[value] = 1;
            } else {
                map[value] += 1;
            }
        }
    });

    let highest = 0, c;

    for (const key in map) {
        if (map[key] > highest) {
            c = key;
            highest = map[key];
        }
    }

    return c.repeat(highest);
}

console.log(longestSubString('aaaaaabbb')); // a repeat 6 times, so it should return 'aaaaaa'
console.log(longestSubString('abbb')); // b repeat 3 times, so it should return 'bbb'
