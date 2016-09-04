// Using the JavaScript language, have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
function letterChanges(str) {
    const chars  = str.split(''),
          vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    const replaced = chars.map((value) => {
        const charCode = value.charCodeAt(0);
        let char;

        if (charCode >= 97 && charCode <= 121) {
            char = String.fromCharCode(charCode+1);
        } else if (charCode == 122) {
            char = String.fromCharCode(97)
        }

        if (charCode >= 65 && charCode <= 89) {
            char = String.fromCharCode(charCode+1);
        } else if (charCode == 90) {
            char = String.fromCharCode(65)
        }

        if (char) {
            if(vowels.has(char.toLowerCase())) {
                char = char.toUpperCase();
            }
            return char;
        }

        return value;
    });
    return replaced.join('');
}

console.log(letterChanges('fun times!')); // Output: "gvO Ujnft!"
console.log(letterChanges('hello*3')); // Output: "Ifmmp*3"
