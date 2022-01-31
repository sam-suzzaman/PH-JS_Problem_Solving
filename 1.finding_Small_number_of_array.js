let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -3, -4];
let n = arr.length;
let small = arr[0];
for (let i = 0; i < n; i++) {
  if (small > arr[i]) {
    small = arr[i];
  }
}

console.log(small);