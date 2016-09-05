function nonRepeatingChar(string) {
    const chars = string.split(''),
          map = {};


    chars.map((value) => {
        if(!map[value]) {
            map[value] = 1;
        } else {
            map[value] += 1;
        }
    });

    for(let key in map) {
        if(map[key] === 1) {
            return key;
        }
    }
}

console.log(nonRepeatingChar('the quick brown fox jumps then quickly blow air')) // Output: f
