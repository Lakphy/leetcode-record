/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let node1 = headA;
  let node2 = headB;
  while (1) {
    if (node1 === node2) return node1;
    node1 = node1 ? node1.next : headA;
    node2 = node2 ? node2.next : headB;
  }
};
