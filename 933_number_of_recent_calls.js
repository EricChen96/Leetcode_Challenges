
var RecentCounter = function() {
    this.answer = [];
    this.counter = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.answer.push(t);
    while(this.answer[this.counter] < t-3000) {
        this.counter++;
    }
    return this.answer.length-this.counter;
};

RecentCounter.prototype.ping = function(t) {
    this.answer.push(t);
    while(this.answer[0] < t-3000) {
        this.answer.shift();
    }
    return this.answer.length;
};
/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */