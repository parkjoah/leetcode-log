var myAtoi = function(s) {
    let sign = 1;
    let result = "";
    let i = 0;

    while(i<s.length && s[i]===" "){
        i++;
    }
    if(s[i]==="-" || s[i]==="+"){
        sign = s[i]==="-"? -1 : 1;
        i++;
    }
    while(i<s.length && s[i]>='0' && s[i] <='9' ){
        result += s[i];
        i++;
    }
    result = result==="" ? 0 : sign > 0 ? Number(result) : - Number(result);

    if(result >= 2**31 -1) return 2**31 -1;
    else if(result <= -(2**31)) return -(2**31);
    return result;
};