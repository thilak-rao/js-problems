/**
 * Generate random between 5 to 7 by using defined function.
 * Problem found on http://www.thatjsdude.com/interview/js1.html#generateRandom
 *
 * @param min
 * @param max
 * @returns {number}
 */
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumbers(5, 20));

