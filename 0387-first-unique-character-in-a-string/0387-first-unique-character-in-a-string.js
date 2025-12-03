var firstUniqChar = function(s) {
    let obj = {}
    for(c of s){
        obj[c] = (obj[c] || 0) + 1;
    }
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]===1) return i;
    }
    return -1;
};