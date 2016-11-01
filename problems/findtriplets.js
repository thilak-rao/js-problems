// Given a set S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the set which gives the sum of zero.
//
//     For example, given set S = {-1 0 1 2 -1 -4},
//
// One possible solution set is: (-1, 0, 1) (-1, 2, -1)
//
// Note that (0, 1, -1) is not part of the solution above, because (0, 1, -1) is the duplicate of (-1, 0, 1). Same with (-1, -1, 2).
//
// For a set S, there is probably no “the” solution, another solution could be: (0, 1, -1) (2, -1, -1)
function findTriplets(arr, n) {
    arr.sort();
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let j = i + 1,
            k = len - 1;

        while (j < k) {
            if(arr[i] + arr[j] + arr[k] < n) {
                j++;
            } else if (arr[i] + arr[j] + arr[k] > n) {
                k--;
            } else {
                console.log(`[${arr[i]}, ${arr[j]}, ${arr[k]}] = ${n}`);
                j++;
                k--;
            }
        }

    }
    return true;
}

const arr = [-1, -4, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
findTriplets(arr, 0);
