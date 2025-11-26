
var singleNumber = function(nums) {
    const len = {};
    let answer ;
    for(num of nums){
        len[num] = len[num] ? len[num]+1 : 1;
    }
    for(let key in len){
        if(len[key]===1) return Number(key)
    }
};