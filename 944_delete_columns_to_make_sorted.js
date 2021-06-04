/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    const length = strs[0].length;
    let prevElementASCII;
    let count = 0;
    for(let i = 0; i < length; i++) {
        prevElementASCII = strs[0].charCodeAt(i);
        for(let j = 1; j < strs.length; j++) {
            if(strs[j].charCodeAt(i) < prevElementASCII) {
                count++;
                break;
            }
            prevElementASCII = strs[j].charCodeAt(i);
        }
    }
    return count;
    
};