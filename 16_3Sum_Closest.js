/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let answer = Infinity;
    nums.sort((a,b) =>a-b);
    for(let i = 0; i < nums.length; i++) {
        let left = i+1;
        let right = nums.length-1;      
        while(left < right) {
            let tempSum = nums[i]+ nums[left] + nums[right];
            if(Math.abs(tempSum - target) < Math.abs(answer - target)) {
                answer = tempSum;
            }
            if(tempSum > target) { 
                right--;
            }
            else {
                left++;
            }
        }
    }
    return answer;
};