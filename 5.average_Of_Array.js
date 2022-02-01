function avgOfArray(arr) {
  let sum = 0;
  let avg;
  let i = 0;
  let n = arr.length;

  for (i; i < n; i++) {
    sum += arr[i];
  }

  avg = sum / n;
  return avg;

}

let result = avgOfArray([3, 4, 5, 6, 7, 3]);
console.log(result.toFixed(3));