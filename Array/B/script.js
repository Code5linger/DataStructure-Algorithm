// const string = ['a', 'b', 'c', 'd'];

// console.log(string);
// console.log(string[2]); // 0(1)

// // PUSH
// string.push('e'); // 0(1)
// console.log(string);

// // POP
// string.pop(); // 0(1)
// console.log(string);

// // Unshift
// string.unshift('💥'); // 0(n)
// console.log(string);

// // Shift
// string.shift(); // 0(n)
// console.log(string);

// // Splice
// string.splice(2, 0, '🎴'); // 0(n)
// console.log(string);

// let array = [3, 5, -4, 8, 11, -1, 6];
let nums = [2, 7, 11, 15];
// let array = [3, 2, 4];

// let targetValue = 10;
let target = 9;
// let targetValue = 6;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return `[${i},${j}]`;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
