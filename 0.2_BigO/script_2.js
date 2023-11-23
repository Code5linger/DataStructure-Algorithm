//
const nemo = ["nemo"];
//
const everyone = [
  "Marlin",
  "Dory",
  "Gill",
  "Bloat",
  "Peach",
  "Gurgle",
  "Bubbles",
  "Deb",
  "Jacques",
  "Nigel",
  "Crush",
  "Coral",
  "Squirt",
  "nemo",
];
//
const sea = new Array(10000).fill("nemo");

function findingNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!!!!");
    }
  }
  let t1 = performance.now();
  console.log("Searching for Nemo took " + (t1 - t0) + " ms");
}

findingNemo(sea);
