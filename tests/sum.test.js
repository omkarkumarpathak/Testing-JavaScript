// const sum=require('../functions/sum.js')

// test('testing sum function', ()=>{
//     expect(sum(1,2)).toBe(3);
// })


//Check-2

// test('Object testing',()=>{
//     const data={one:1};
//     data['two']=2;
//     expect(data).toBeTruthy()
// })


// test('Falsy checking',()=>{
//     const n=undefined;
//     expect(n).toBeFalsy()
// })

function throwError() {
  throw new Error('Something went wrong');
}

test('throws an error', () => {
  expect(throwError).toThrow();                    // ✅ any error
  expect(throwError).toThrow('Something went wrong'); // ✅ specific message
  expect(throwError).toThrow(Error);               // ✅ error type
});