var containsDuplicate = function(nums) {
    let obj={}
    for(let i of nums){
        if(obj[i] > 0) return true;
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }
    return false;
};