//1. Create a class Employee with methods to show name, 
// salary and calculate yearly salary.
/*
class Employee{
    constructor(name,salary){
        this.name = name
        this.salary = salary
    }
    info(){
        console.log(`my name is ${this.name} and salary ${this.salary}`)
    }
    yearly(){
        console.log(`my yearly salary is:${this.salary*12}`)
    }
}


    let obj
    obj = new Employee('raju',20000)
    obj.info()
    obj.yearly()
*/

//2. Create a class Counter with increment(), 
// decrement() and getValue() methods.
/*
class Counter{
    constructor(num){
        this.num = num
    }
    increment(){
        console.log(`${this.num} is incresed add 2 : ${this.num+2}`)
    }
    decrement(){
        console.log(`${this.num} is decrement sub 2 : ${this.num-2}`)
    }
    getValue(){
        console.log(`present value : ${this.num}`)
    }
}

let obj = new Counter(5)
obj.increment()
obj.decrement()
obj.getValue()
*/

//3. Create a class Calculator with add,
//  subtract, multiply, divide methods.

/*
class Cal{
    constructor(a,b){
        this.a = a
        this.b = b
    }
    add(){
        console.log(this.a+this.b)
    }
    sub(){
        console.log(this.a-this.b)
    }
    multi(){
        console.log(this.a*this.b)
    }
    div(){
        console.log(this.a/this.b)
    }
}

let obj = new Cal(2,2)
obj.add()
obj.sub()
obj.multi()
obj.div()
*/

//4. Create a class Circle
//  with radius & a method to calculate area.
/*
class Circle{
    constructor(r){
        this.r = r
    }
    area(){
        console.log(3.14*this.r**2)
    }

}

let obj = new Circle(6)
obj.area()
*/

//5. Write a JavaScript program to print even numbers from 2 to 20, 
// where each number prints after a delay of 0.5 seconds using setInterval().
/*
function ok(){
    let i = 0;
    const timer = setInterval(()=>{
        if(i<=20){
            if(i%2==0){
                console.log(i)
            }
            i++;
        }else{
            clearInterval(timer)
        }
    },500)

}

ok()
*/

//6. Create a JavaScript program that uses setInterval() to print a message every 1 second.
//After the interval runs 5 times, stop the interval and print:
//Output:Task Completed
/*
function ok(){
    let i = 0;
    const timer = setInterval(()=>{
        if(i<=5){
            i++;
            }else{
            clearInterval(timer)
            }
    },1000)
    console.log('task completed')
}
    */
   



