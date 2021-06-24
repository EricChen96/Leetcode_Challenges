/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    let answer = new Array(numRows).fill("");
    let count = 0;
    let direction = 1;
    for(let i = 0; i < s.length; i++) {
        answer[count] += s[i];
        count += direction;
        if(count === numRows-1) {
            direction = -1;
        }
        else if(count === 0) {
            direction = 1;
        }
    }
    return answer.join("");
};