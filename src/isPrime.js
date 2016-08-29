/**
 * Is Prime?
 * Write a function to verify if a given number is a
 * prime number.
 */
function isPrime(n) {
    let divisor = 2;

    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        }

        divisor += 1;
    }

    return true;
}
