/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    for(let i = 0, j = 1; i < prices.length; ++i, ++j) {
        if(prices[i] >= prices[j]) {
            prices[i] -= prices[j]; 
            j = i + 1;
        }
        else if(!prices[j]) {
            j = i +1;
        } 
        else
        {
            i--;
        }
        console.log(`i: ${i}, j: ${j}`)
    }
    return prices
};

console.log(finalPrices([4,7,1,9,4,8,8,9,4]));