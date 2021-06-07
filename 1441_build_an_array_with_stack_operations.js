/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    let answer = [];
    let end = target[target.length-1];
    let count = 0;
    for (let i = 1; i <= end; i++) {
        if(i !== target[count]) {
            answer.push("Push","Pop");
        }
        else {
            answer.push("Push");
            count++;
        }
    }
    return answer;
};