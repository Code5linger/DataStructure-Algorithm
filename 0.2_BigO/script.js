// const nemo = ["nemo", "dori", "Marlin"];

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "nemo") {
//       console.log("Fund Nemo!");
//     } else {
//       console.log("Finding Nemo🔎");
//     }
//   }
// }

// findNemo(nemo);

// const large = new Array(10).fill("!nemo");

// function findingNemo(array) {
//   let time0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "nemo") {
//       console.log("Found Nemo");
//     } else {
//       console.log("Searching...🔎");
//     }
//   }
//   let time1 = performance.now();
//   console.log("Finding nemo took " + (time1 - time0) + "m/s");
// }

// findingNemo(large); // 0(n) ==> Linear Time || O(n)

// const boxes = ["A", "B"];

// const findingNemo_2 = (boxes) => {
//   boxes.for (let i = 0; i < array.length; i++)
//   if (boxes[i] == "nemo") {
//     console.log("Found Nemo");
//   };
// };

// findingNemo_2(boxes);

// const ocean2 = ["nemo", "marlin", "dori"];

// const largeArray = new Array(100).fill("nemo");

// function findingNemo_3(array) {
//   let time0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     //
//     if (array[i] == "nemo") {
//       console.log("Found Nemo!");
//     } else {
//       console.log("🔎");
//     }
//   }
//   let time1 = performance.now();
//   console.log("It took " + (time1 - time0) + "m/s");
// }
// findingNemo_3(largeArray);

const boxes = [0, 1, 2, 3, 4, 5];

let time0 = performance.now();
//
function compressFirstBox(boxes) {
  console.log(boxes[0]);
  console.log(boxes[5]);
}

compressFirstBox(boxes);
//
let time1 = performance.now();
console.log("It took " + (time1 - time0) + "m/s"); // Constant Time || O(1)
