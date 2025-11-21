/*
1).Create a Promise that resolves with the message "Success!".
    Log the result using .then().
2).Write a Promise that rejects with the message "Error occurred".
    Handle the error using .catch().
*/
/*
function demo(){
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Success!")
            }else{
                reject("Error Occured")
            }
        },2000)
    })
}
demo().then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
*/
/*
2)Create a class Animal with a method speak(). Inherit it in a class Dog and override the speak() method. 
Call the method using an object of both classes.
*/
/*
class Animal{
    speak(){
        console.log('Animals sound')
    }
}
class Dog extends Animal{
    speak(){
        console.log('dog sound bwbow')

    }
}

let obj1 = new Dog();
obj1.speak();
*/
/*
4)	.Create two classes Car and Bike. In both classes, write a method called start(). 
Call the start() method for both objects and see how it works differently.
*/
/*
class Car{
    start(){
        console.log('car started')
    }
}
class Bike{
    start(){
        console.log('Bike started')
    }
}

let = obj1 = new Car();
obj1.start();
let = obj2 = new Bike();
obj2.start();
*/
/*
5)	.Write a function printDetails() that takes different types of objects (like Student or Teacher) and calls their info() method.
 Each object should have its own version of info().
*/
/*
class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    info(){
        console.log(`My name is: ${this.name} and age is:${this.age} `)
    }
}

class Teacher{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    info(){
        console.log(`iam a teacher name is:${this.name} and age:${this.age}`)
    }
}

let obj = new Student('raju',26);
obj.info()
let obj1 = new Teacher('Harsh',54)
obj1.info()
*/
/*
6).Create a parent class Shape with a method draw(). Create two child classes Circle and Square, each overriding the draw() method. 
Call the method for both classes.
*/
/*
class Shape{
    draw(){
        console.log('draw any shap')
    }
}

class Circle extends Shape{
    draw(){
        console.log('draw round shape')
    }
}

class Square extends Shape{
    draw(){
        console.log('draw box shape')
    }
}

let obj = new Shape();
obj.draw();

let obj1 = new Circle();
obj1.draw();

let obj2 = new Square();
obj2.draw();
*/
/*
7)Write a JavaScript program to check whether
 a given number is an Armstrong Number.
*/
/*
let n = 153,bkp = n,bk=n,s=0,c=0;
while(n>0){
    n = Math.floor(n/10);
    c++;
}
 while (bkp>0){
    d = bkp%10
    s = s+d**c
    bkp = Math.floor(bkp/10);
 }
 if (s == bk){
    console.log('Armstrong')
 }else{
    console.log('Not Armstrong')
 }
*/