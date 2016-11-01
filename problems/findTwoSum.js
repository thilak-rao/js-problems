// Find any two array elements that can be added to produce n

function findTwoSum(arr, n) {
    arr.sort();
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let k = len - 1;
        let j = i;
        while (j < k) {
            if (arr[j] + arr[k] < n) {
                j++;
            } else if (arr[j] + arr[k] > n) {
                k--;
            } else {
                console.log(`[${arr[j]}, ${arr[k]}] = ${n}`);
                j++;
                k--;
            }
        }
    }
    return true;
}

const arr = [-1, -4, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
findTwoSum(arr, 0);
