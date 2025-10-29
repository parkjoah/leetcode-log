
// n번째가 n+1보다 작으면 구매, 크면 팔기. 
var maxProfit = function(prices) {
    let [currPrice, num] = [prices[0],0];
    
    for(let i=1; i<prices.length; i++){
        if(currPrice < prices[i]) {
            num = num + prices[i] - currPrice;
        }
        currPrice = prices[i];
    }
    
    return num;


};