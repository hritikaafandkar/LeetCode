/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

    for(let row=0; row<numRows; row++){
        const currentRow = [];

        for(let col = 0; col<=row; col++){
            if(col === 0 || col === row){
                currentRow.push(1);
            }else{
                const val = triangle[row - 1][col - 1] + triangle[row - 1][col];
                currentRow.push(val);
            }
        }

        triangle.push(currentRow);
    }

    return triangle;
};