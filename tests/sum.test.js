const {sum, fetchData, PromiseFunction}=require('../functions/sum.js')

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


//throw error

// function throwError() {
//   throw new Error('Something went wrong');
// }

// test('throws an error', () => {
//   expect(throwError).toThrow();                    // ✅ any error
//   expect(throwError).toThrow('Something went wrong'); // ✅ specific message
//   expect(throwError).toThrow(Error);               // ✅ error type
// });


//Testing fetchData function Checking

// test('async fetchData testing', (done)=>{
    
//     function callback(data){
//         try {
//             expect(data).toBe('peanut-butter');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }
//     fetchData(callback);

// })


//:: Testing Promise returning function

test('testing-promise function',()=>{
    expect(PromiseFunction()).resolves.toBe('peanut-butter');
})

