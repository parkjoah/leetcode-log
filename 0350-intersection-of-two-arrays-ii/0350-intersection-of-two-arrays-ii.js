var intersect = function(nums1, nums2) {
    let obj={}
    let answer = [];
    for(let i of nums1){
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }    
    for(let i of nums2){
        if(obj[i] >0) answer.push(i)
        obj[i]--;

    }  
    return answer;
    
};