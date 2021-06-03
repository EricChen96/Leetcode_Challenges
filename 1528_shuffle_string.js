/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let answer = new Array(s.length);
    for(let i = 0; i < s.length; i++) {
        answer[indices[i]] = s[i];
    }
    return answer.join("");
};

let s = "aaiougrt", indices = [4,0,2,6,7,3,1,5];

console.log(restoreString(s,indices));