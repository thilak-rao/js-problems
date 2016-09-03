/**
 * Check for the longest continuous substring, of any given string.
 * @param string
 * @returns {string}
 */
function longestSubString(string) {
    let chars   = string.split(''),
        map     = new Map(),
        current = chars[0];


    chars.forEach((value) => {
        if(current !== value) {
            current = value;
            map.set(value, 1);
        } else {
            if(!map.has(value)) {
                map.set(value, 1);
            } else {
                map.set(value, map.get(value) + 1);
            }
        }
    });

    let highest = 0, c;
    map.forEach((value, key) => {
        if (value > highest) {
            c = key;
            highest = map.get(key);
        }
    });

    return c.repeat(highest);
}

console.log(longestSubString('aaaaaabbb')); // a repeat 6 times, so it should return 'aaaaaa'
console.log(longestSubString('abbb')); // b repeat 3 times, so it should return 'bbb'
