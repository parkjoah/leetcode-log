/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let delNode = head;
    let endNode = head;
    
    for(let i =0; i<n; i++){
        endNode = endNode.next;
    }
    if(endNode === null) return head.next;

    while(endNode.next !== null){
        delNode = delNode.next;
        endNode = endNode.next;
    }
    delNode.next = delNode.next.next;
    return head;
};