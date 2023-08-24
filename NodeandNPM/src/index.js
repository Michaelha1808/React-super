import 'core-js/modules/es.object.values'
import 'core-js/modules/es.promise'
import domHandler from './dom';
import sum from "./utils";
import './style/style.css'
import './style/style.scss'
console.log(sum(100,20));
domHandler()

// ES6 Spread Operator
const person = { name: 'Duoc' }
const personClone = { ...person }
console.log('personClone', personClone)

// ES7 Object.values
console.log('Object.values', Object.values(personClone))

// Promise  Async Await
const  handle = ()=> new Promise((resolve)=>{
    setTimeout(() => {
        resolve(100)
    }, 1000);
})

const main = async()=>{
    const value = await handle()
    console.log('value', value);
}
main()