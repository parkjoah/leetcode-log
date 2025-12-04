
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj = {};
    for(let c of s){
        obj[c] = (obj[c] || 0) + 1
    }
    for(let c of t){
        if(!obj[c] || obj[c] < 1) return false;
        obj[c]--;
    }
    return true;
};