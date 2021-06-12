/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let word1String = "";
    let word2String= "";
    for(const element of word1) {
        word1String += element;
    }
    for(const element of word2) {
        word2String += element;
    }
    return word1String === word2String;
};