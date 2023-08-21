// const user = {
//     name:'Chi',
//     age:'21',
//     sex:'male'
// }

// // const name = user.name
// // const age = user.age
// // const sex = user.sex

// const {age: userAge, name,sex} = user

// console.log(name, userAge , sex);

// //destructuring array
// const list = [
//     1,
//     function (a,b) {
//         return a+b
//     }
// ]
// const [value, sum] = list

// console.log(sum(2,3));


//! spread syntax
// const user = {
//     name:'chi',
//     age:21,
//     ability:['coding']
// }
// //* shallow copy (copy nông)
// // const cloneUser = user

// const cloneUser = {...user}
// console.log(cloneUser ==user);

// //! rest parameter

// const handle = (a,b,...c)=> c
// const value = handle(1,2,3,4,5,6)

// console.log(value);

const handle = ({a,b,...c})=> c
const value = handle({a:1,b:2,c:3,d:4,e:5})
console.log(value);