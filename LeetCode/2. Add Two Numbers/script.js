// var addTwoNumbers = function (l1, l2) {
//   const dummy = new ListNode();
//   let curr = dummy;
//   let carry = 0;

//   while (l1 || l2) {
//     let sum = carry;
//     if (l1) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     curr.next = new ListNode(sum % 10);
//     carry = Math.floor(sum / 10);

//     curr = curr.next;
//   }
//   if (carry > 10) {
//     carry.next = new ListNode(carry);
//   }
//   return dummy.next;
// };

