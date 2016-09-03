/**
 * Given an expression string exp, write a program to examine
 * whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]”
 * are correct in exp. For example, the program should
 * print true for exp = “[()]{}{[()()]()}”
 * and false for exp = “[(])”
 */
function bracketsMatch(string) {
    if(string.length % 2 !== 0) {
        return false;
    }

    const firstHalf = string.split('').slice(0, string.length/2);
    const secondHalf = string.split('').slice(string.length/2).reverse();

    let isMatch = true;
    firstHalf.forEach((value, i) => {
       switch(value) {
           case '{':
               if(secondHalf[i] !== '}') isMatch = false;
               break;

           case '[':
               if(secondHalf[i] !== ']') isMatch = false;
               break;

           case '(':
               if(secondHalf[i] !== ')') isMatch = false;
               break;
       }
    });

    return isMatch;
}

console.log(bracketsMatch('{{[()]}}')); // true
console.log(bracketsMatch('{{[(]}}')); // false
console.log(bracketsMatch('{{[(>]}}')); // false
console.log(bracketsMatch('()')); // true
