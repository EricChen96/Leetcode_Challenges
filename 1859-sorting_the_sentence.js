/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let arr = s.split(" ");
    let answer = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        let index = parseInt(arr[i][arr[i].length-1]);
        console.log(index);
        answer[index-1] = arr[i].slice(0,arr[i].length-1);
    }
    return answer.join(" ");
};

let test = [];
test.push("is2 sentence4 This1 a3")

console.log(sortSentence(test[0]));