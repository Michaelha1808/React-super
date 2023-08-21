//* callback function

// const nums = [1,2,3,4,5]
// const callback = (item, index)=>{
//     console.log(`STT ${index} la ${item}`);
// }
// nums.forEach(callback)

//* currying là 1 function return về function

// function findNumber(num) {
//      return function(func) {
//         const result = []
//         for (let i = 0; i <= num; i++) {

//             if(func(i)){
//                 result.push(i)
//             }
//         }
//         return result
//      }
// }


const findNumber = (num) => (func) => {
            const result = []
            for (let i = 0; i <= num; i++) {
    
                if(func(i)){
                    result.push(i)
                }
            }
            return result
         }
    

// const value=  findNumber(10)(number => number%2 != 0)
const newFunc = findNumber(10)
const value=  newFunc((number => number%2 != 0))


console.log( value);
