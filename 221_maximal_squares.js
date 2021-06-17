/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    let area = 0;
    let copy = [...Array(matrix.length)].map((element) => Array(matrix[0].length));
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(i === 0 || j === 0) {
                if(matrix[i][j] === '1') {
                    copy[i][j] = 1;
                    area = Math.max(area,1);
                }
                else {
                    copy[i][j] = 0;
                }
            }
            else {
                if(matrix[i][j] === '1') {
                    copy[i][j] = Math.min(copy[i-1][j],copy[i][j-1],copy[i-1][j-1])+1;
                    area = Math.max(area,copy[i][j]);
                }
                else {
                    copy[i][j] = 0;
                }
            }
        }
    }
    return area ** 2;
};