/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n <= 2) return n; 

    let oneStepBefore = 2; 
    let twoStepsBefore = 1;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = oneStepBefore + twoStepsBefore; 
        twoStepsBefore = oneStepBefore;
        oneStepBefore = current;       
    }

    return oneStepBefore; 
};
