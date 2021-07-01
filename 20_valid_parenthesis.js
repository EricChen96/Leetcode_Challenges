/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let container = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            container.unshift(s[i])
        }
        else {
            let mustEqual = container.shift();
            if (s[i] === ")") {
                if (mustEqual !== "(") {
                    return false;
                }
            }
            else if (s[i] === "]") {
                if (mustEqual !== "[") {
                    return false;
                }
            }
            else if (s[i] === "}") {
                if (mustEqual !== "{") {
                    return false;
                }
            }
        }
    }
    return container.length === 0;
};

let example = "{[]}";
console.log(isValid(example));