function sum(a, b) {
  return a + b;
}

function fetchData(callback) {
  setTimeout(() => {
    callback("peanut-butter");
  }, 2000);
}

module.exports = { sum, fetchData };
