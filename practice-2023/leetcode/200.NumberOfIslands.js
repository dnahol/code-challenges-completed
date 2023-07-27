/*
 * Wed Jul 26, 2023
 *
 * 2nd attempt solution
 * 1st attempt bug: left in 2 console logs, one within dfs, time exceeded.
 *
 *
 *
 * */


/**
 * @param {character[][]} grid
 * @return {number}

pseudo

islands = 0
iterate through grid, i,j
    if 1, 
    islands++ 
    dfs from i,j to all adjacent 1s
        convert them to 0s
return islands
 
 */
var numIslands = function(grid) {

    return grid.reduce((acc, row, i)=> {
        return acc + row.reduce((islands, val, j)=> {
            if(val === '1') {
                dfs(i,j, grid);
                return islands+1;
            }
            return islands+0;
        }, 0);
    }, 0);
};

var dfs = function(i,j, grid) {
    //base cases
    //out of bounds, '0' or visited (converted)
    if( i < 0 || i === grid.length || j < 0 || j === grid[0].length || grid[i][j] === '0') return 0;

    //dirs up, right, down, left
    let dirs = [[-1,0], [0,1], [1,0], [0, -1]];

    //action: convert '1' to '0'
    grid[i][j] = '0';

    //traverse: 4 dirs
    for(let dir of dirs) {
        dfs( i+dir[0], j+dir[1], grid );
    }
    
    return 1;
}
