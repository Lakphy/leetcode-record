/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (!head) return null;
  if (head.val === val) return head.next;
  let cur = head;
  let next = head.next;
  while (1) {
    if (!next) break;
    if (next.val === val) {
      cur.next = next.next;
      return head;
    }
    cur = next;
    next = cur.next;
  }
};
