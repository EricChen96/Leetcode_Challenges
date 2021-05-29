/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let array = nums.sort(function(a,b) { return a - b; });
    console.log(array);
    let max = 0;
    for(let i = 0; i < array.length; i+=2) {
        max += Math.min(array[i], array[i+1]);
    }
    return max;
};

let example = [-470, 66, -4835, -5623];

console.log(arrayPairSum(example));