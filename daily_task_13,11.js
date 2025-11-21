/*// 1.	Write a program to add an element "grapes" to the end of an array
//Input:fruits = ["apple", "banana"] |  Output:["apple", "banana", "grapes"]

let i = ['apple','banana'];
i.push("grapes")
console.log(i)

//2.Write a program to Remove the first element from an array and print it.
//Input:x=[1,2,3] // Output:[2,3]

let x = [1,2,3]
console.log(x.slice(1))

//3.	Find the position of particular element in an array.
//Input:[1,2,3,4,5] Element=2 Output:1

let x = [1,2,3,4,5],ele=2;
for(let i=0;i<x.length;i++){
    if(x[i]==ele){
        console.log(i)
    }
}

//4.	Write a program to print all elements of an array using a loop.
//Input: let arr = [10, 20, 30, 40]; Output:10 20 30 40

let x=[10,20,30,40],i=0;
while(i<x.length){
    process.stdout.write(x[i]+" ")
    i++;
}

//5.	Write a function sumArray(arr) that returns the sum of all numbers in an array.
//Input:sumArray([5, 10, 15]) Output:30

let x = [5,10,15],r=0;
for(let i of x){
    r = r+i
}
console.log(r)

//6.	Write a function findMax(arr) that returns the largest number from an array.
//Input:findMax([3, 9, 2, 7, 5]) Output:9

let x=[3,9,2,7,5],max=0;
for(let i of x){
    if (i>max){
        max = i
    }
}
console.log(max)

//7.	Write a program to count how many even and odd numbers are present in an array.
//Input:[1, 2, 3, 4, 5, 6] Output:Even: 3, Odd: 3

let x=[1,2,3,4,5,6],e=0,o=0;
for(let i of x){
    if(i%2==0){
        e++;
    }else{
        o++;
    }
}
console.log('even :',e)
console.log('odd :',o)

//14/11/25  daily task

//1.	Return a new array where each number is doubled.
//Input:[1, 2, 3, 4] Output:[2, 4, 6, 8]

let x=[1,2,3,4];
let r = x.map(n => n*2)
console.log(r)

//2.	Convert every word in the array to uppercase.
// Input:["hi", "hello"]Output:["HI", "HELLO"]

let x = ["hi", "hello"];
let r = x.map(v => v.toUpperCase());
console.log(r)

//3.	Return an array containing the length of each string.
//Input:["apple", "ball", "cat"]Output:[5, 4, 3]

let x = ["apple", "ball", "cat"],j=[];
for(let i of x){
    j.push(i.length)
}
console.log(j)

//4.	Return only the even numbers from the array.
//Input:[10, 11, 12, 13, 14]Output:[10, 12, 14]

let x = [10, 11, 12, 13, 14];
let r = x.filter(v => v%2==0)
console.log(r)

//5.	Return all words that start with the letter “A”.
//Input:["Arun", "Bala", "Ajay", "Mani"]Output:["Arun", "Ajay"]

let x = ["Arun", "Bala", "Ajay", "Mani"],j=[];
for(let i of x){
    if (i[0] == 'A'){
        j.push(i)
    }
}
console.log(j)

//6.	Return all numbers greater than 50.
//Input:[10, 60, 45, 80]Output:[60, 80]

let x = [10, 60, 45, 80];
let r = x.filter(v => v>50)
console.log(r)

//8.	Write a function reverseArray(arr) to reverse an array manually.
// Input:reverseArray([1, 2, 3, 4])Output:[4, 3, 2, 1]

let x = [1, 2, 3, 4],j=[];
for(let i of x){
    j.unshift(i)
}
console.log(j)

//9.	Write a function findAverage(arr) that returns the average of all elements.
//Input:findAverage([10, 20, 30, 40])Output:25*/

let x=[10, 20, 30, 40],s = 0;
for(let i of x){
    s = s+i
}
console.log(s/x.length)



















