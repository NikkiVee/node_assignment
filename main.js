module.exports = {
    return arr[0];
  }
  tail(arr) {
    return arr.slice(1);
  },
  last(arr) {
    return arr[arr.length - 1]
  },
  sum(arr) {
    return arr.reduce((sum, curr) => sum + curr)
  }
}
