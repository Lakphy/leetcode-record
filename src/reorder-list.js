/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 找到中点
  let slow = head;
  let fast = head.next?.next;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }
  // 翻转后半部分
  let cur = slow.next;
  slow.next = null;
  let prev = null;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  // 间隔插入
  let l1 = head;
  let l2 = prev;
  // console.log(l1);
  // console.log(l2);
  while (l1 && l2) {
    const temp = l1.next;
    l1.next = l2;
    l2 = l2.next;
    l1.next.next = temp;
    l1 = temp;
  }
};
