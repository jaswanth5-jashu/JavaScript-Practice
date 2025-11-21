// 1.	Write a function getNegatives(arr) that returns only the negative numbers.
//Input:arr=[-2, 3, -5, 6, 0, 1]Output:[-2,-5]
/*
let x=[-2, 3, -5, 6, 0, 1];
let r = x.filter(i => i<0);
console.log(r)
*/

// 2.	Write a function secondSmallest(arr) that returns the second smallest element in an array.
//Input:arr= [10, 30, 20, 50, 40]Output:20
/*
let x = [10, 30, 20, 50, 40],f=Infinity,s=Infinity;
for(let i of x){
    if(i<f){
        s = f
        f = i
    }
    else if(i<s && i!==f){
        s = i
    }
}
console.log(s)*/

//3.	Write a function reverseArray(arr) to reverse an array manually.
//Input:arr=[1, 2, 3, 4]Output:[4, 3, 2, 1]
/*
let x = [1, 2, 3, 4],j=[];
for(let i of x){
    j.unshift(i)
}
console.log(j)*/

//4.Write a JavaScript program using an arrow function to return only the odd numbers from the array.
//Input:[10, 11, 12, 13, 14]Output:[11,13]
/*
let x = [10, 11, 12, 13, 14];
let i = x.filter(j => j%2 !=0);
console.log(i)
*/

//5.Write a JavaScript program using an arrow function to return the first word whose length is greater than 3.
//Input:["cat", "lion", "tiger"]Output:"cat"
/*
let x = ["cat", "lion", "tiger"]
let i = x.filter(j => j.length == 3);
console.log(i)
*/
//6.	Write an arrow function isPalindrome(word) that checks if a string is a palindrome.
//Input:"level"Output:true
/*
let x = "level";
if(x == x.split("").reverse().join("")){
    console.log("true")
}else{
    console.log("false")
}
*/
//7.	Find product of all numbers
//Input:[2,3,4]Output:24

let x = [2,3,4];
let i = x.reduce((a,b)=>a*b,1)
console.log(i)

//8.	Return the last element of the array
//Input:[5, 10, 15]Output:15
/*
let x = [5, 10, 15];
console.log(x.slice(-1))
*/
