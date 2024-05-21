/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      console.log(nums[i]);
    }
  }
};

searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 3);
