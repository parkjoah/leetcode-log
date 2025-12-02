var reverse = function(x) {
    let arr = String(x).split("")
    let l = 0;
    let r = arr.length -1;
    while(l < r){
        [arr[l],arr[r]] = [arr[r],arr[l]];
        l++;
        r--;
    }
    let result;
    if(x < 0){
        result = Number("-" + arr.slice(0,-1).join(""))
    } else {
        result = Number(arr.join(""))
    }
    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }
    return result;
};