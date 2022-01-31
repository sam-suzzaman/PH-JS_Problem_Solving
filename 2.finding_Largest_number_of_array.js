let arr = [1, 2, 3, 4, 5, 6, 7, -5, -6, -7, -8];
let n = arr.length;
let largest = arr[0];

for (let i = 0; i < n; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}

console.log(largest);