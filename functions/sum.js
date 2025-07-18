function sum(a, b) {
  return a + b;
}

function fetchData(callback) {
  setTimeout(() => {
    callback("peanut-butter");
  }, 2000);
}

function PromiseFunction(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve('peanut-butter'),1000);
    })
}

module.exports = { sum, fetchData, PromiseFunction };
