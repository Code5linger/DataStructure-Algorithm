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

// const boxes = [0, 1, 2, 3, 4, 5];

// let time0 = performance.now();

// function compressFirstBox(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[5]);
// }

// compressFirstBox(boxes);

// let time1 = performance.now();
// console.log("It took " + (time1 - time0) + "m/s"); // Constant Time || O(1)

// function funChallenge(input) {
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }

// funChallenge(); //  BIG O(3 + 4n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

anotherFunChallenge(); //BIG O(4 + 7n)

//#1 -- For loop in Javascript.
const fish = ["dory", "bruce", "marlin", "nemo"];
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100).fill("nemo");

function findNemo2(array) {
  //
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  //
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(large);
