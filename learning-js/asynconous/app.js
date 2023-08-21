// setTimeout(() => {
//     console.log('Hello');
// }, 0);
// console.log('I am michael');

//* Promise
// const pFunc = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello')
//     }, 0);
// })

// const value=  pFunc().then( val=>{
//     console.log(val);
//     return 100
// }).catch( err =>{
//     console.log(err);
// }).finally(()=>{
//     console.log('ket thuc roi');
// })
// value.then(val =>{
//     console.log(val);
// })
// console.log('value',value);

//* async await
/*
 * await chỉ sử dụng được trong 1 async function
 * chỉ sử dụng await với promise 
 */
const p2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 0);
})

const handle = async()=>{
    try {
        const value = await p2()
        console.log(value);
    } catch (error) {
        console.log(error);
    } finally{
        console.log('finaly');
    }
}
 handle()

 //todo hàm ẩn danh
 ;(async()=>{
    try {
        const value = await p2()
        console.log(value);
    } catch (error) {
        console.log(error);
    } finally{
        console.log('finaly');
    }
})