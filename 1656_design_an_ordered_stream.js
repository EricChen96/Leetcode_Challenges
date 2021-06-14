/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.stream=[n];
    this.pointer=0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey-1] = value;
    if(this.pointer !== idKey-1) {
        return [];
    }
    else {
        let answer = [];
        while(this.stream[this.pointer]) {
            answer.push(this.stream[this.pointer]);
            this.pointer++;
        }
        return answer;
    }
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */