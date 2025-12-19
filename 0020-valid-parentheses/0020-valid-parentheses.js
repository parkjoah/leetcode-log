var isValid = function(s) {
    const stack = [];
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {

        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } 
        else {
            if (stack.pop() !== pair[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
