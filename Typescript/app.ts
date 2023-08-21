//* Basic type

let car = 'Mex'
let bike : String
// bike = 150

let num: number = 10

//* boolean

let isloading: boolean = false

//* undefined
// let body:undefined = undefined

//* null

let footer:null = null

//* any
let person: any
person = 10
person = 'nguoi'
person = false

//* object

// let house = {}

// house.address = 'da nang'

let house : {
    address: String,
    color?:String
} = {
    address:''
}
house.address = 'Da nang'
    

// let house : {
//     address: String
// }  | undefined
// if(house){
// house.address = 'Da nang'
    
// }

//* array

let product:any[] = []
product.push(1)
product.push('1')

//todo string[]
let names = ['michael','ha']
let address : string[] = []
address.push('Ha Noi')

//todo number[]
let numbers: number[] = []
numbers = [1,2,3]

//* object array
let people:{
    name:string
    age:number
}[] = []
people.push({
    name:'Ducky',
    age:27
})

//* function

const sum = (num1:number, num2:number):number =>{
    return num1 + num2 
} 

sum(1,2)

const sub:(num1:number,num2:number) => number = (
    num1:number,
    num2:number
    ) => num1-num2

const handler = ():void => {
    console.log(123);
    
}

//* Union

let price: string | number |boolean
price = 10
price = "20"
price =false

let body:{name:string | number } | {firstName:string}={
    name : 100
}

//* enum
enum Sizes{
    S = 'S',
    M ='M',
    L = 'L',
    XL = 'XL'
}
let size = Sizes.S

//* interface

interface State{
    name: string,
    isLoading: boolean
}

interface State{
    age:number
}
let state : State = {
    name:'Michael',
    isLoading:false,
    age:21
}


// interface State{
//     name: string,
//     isLoading: boolean
// }
// let state : State = {
//     name:'Michael',
//     isLoading:false
// }

//* Type

// type State ={
//     name: string,
//     isLoading: boolean
// }
// // type State ={
// //     age: number
// // }

// let state : State = {
//     name:'Michael',
//     isLoading:false
// }

// type State ={
//     name: string,
//     isLoading: boolean
// }
// let state : State = {
//     name:'Michael',
//     isLoading:false
// }

type Name = {
    name:string
}
type Age = {
    age:number
}

type person = Name & Age

//! type có thể union hoặc merge

//*
const handleClick = <Type>(value: Type) => value

let values = 100
handleClick<string>(`${values}`)

//* Class
class Person1{
    private name: string
    public age:number
    readonly money : number = 50
    constructor(name: string, age :number){
        this.name = name
        this.age = age
    }
    hanle(){
        this.name
        // this.money = 100
        let value = this.money
    }
}

const michael = new Person1('Michael',21)

michael.age
michael.money

class Person2{
    public name:string
    public age:number
    constructor( name:string, age:number){
        this.name= name
        this.age = age
    }
}

class Person3{
    constructor(public name:string,public age:number){

    }
}