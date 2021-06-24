/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = nums1.concat(nums2).sort((a,b) => a-b);
    let arrayLength = newArray.length;
    if(arrayLength % 2 === 0) {
        return (newArray[arrayLength/2]+newArray[arrayLength/2-1])/2;
    }
    return newArray[Math.floor(arrayLength/2)];
    
};