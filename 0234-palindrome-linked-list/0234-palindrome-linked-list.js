var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;

    let list = head;      
    let endHalf = head;   

    while (list !== null && list.next !== null) {
        list = list.next.next;
        endHalf = endHalf.next;
    }
    let prev = null;
    let curr = endHalf;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    let left = head;
    let right = prev;
    while (right !== null) { 
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};
