const arr = [-3, -7, -4, 6, 2, 3];
let firstLargestNumber = arr[0];
let secondLargestNumber = 0;
let i;
let n = arr.length;

// finding the first Largest number
for (i = 0; i < n; i++) {
  if (firstLargestNumber < arr[i]) {
    firstLargestNumber = arr[i];
  }
}

// finding the second Largest number
for (let j = 0; j < n; j++) {
  if (arr[j] < firstLargestNumber && secondLargestNumber < arr[j]) {
    secondLargestNumber = arr[j];
  }
}

console.log("first Largest Number: " + firstLargestNumber);
console.log("secod largest number: " + secondLargestNumber);