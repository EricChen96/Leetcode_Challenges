/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    let array = arr.sort((a,b)=> a-b);
    let difference = array[1]-array[0];
    let prevCount = array[1];
    for(let i = 2; i < array.length; i++) {
        if(array[i]-prevCount !== difference) {
            return false;
        }
        prevCount = array[i];
    }
    return true;
};