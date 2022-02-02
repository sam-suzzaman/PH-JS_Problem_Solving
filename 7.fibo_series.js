function findFiboSeries(n) {
  let series = [0, 1];
  let i, j;
  let nextValue;

  if (n == 0 || n == 1) {
    return series;
  } else {
    for (i = 2; i <= n; i++) {
      nextValue = series[series.length - 1] + series[series.length - 2];
      series.push(nextValue);
    }
    return series;
  }



}

console.log(findFiboSeries(2));