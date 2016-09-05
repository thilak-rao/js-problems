function removeDuplicateFromString(string) {
    string = string.replace(/\s/g, "");
    return [...new Set(string.split(''))].join('');
}

console.log(removeDuplicateFromString('Learn more javascript dude')); // Output: Learnmojvsciptdu
