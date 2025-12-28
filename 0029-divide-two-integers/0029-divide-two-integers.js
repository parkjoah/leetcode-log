
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const MAX = 2 ** 31 - 1;    
    const MIN = -(2 ** 31);     

    if (dividend === MIN && divisor === -1) return MAX;

    const negative = (dividend < 0) !== (divisor < 0);
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;
        while (a >= temp + temp) {
            temp += temp;         
            multiple += multiple; 
        }
        a -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};
