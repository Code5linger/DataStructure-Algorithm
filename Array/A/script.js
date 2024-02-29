const string = ["a", "b", "c", "d"];

string.push("e"); //O(1)
console.log(string);

string.pop(); //O(1)
console.log(string);

string.unshift("x"); //O(n)
console.log(string);

string.splice(2, 2, "samsu"); //O(n/2) => O(n)
console.log(string);
