//1)Remove duplicates from an array without using Set
//Input: [1,2,2,3,4,4,5] | Output: [1,2,3,4,5]

/*
let x = [1,2,2,3,4,4,5],y = [];
function unique(x){
    for(let i of x){
        if (!y.includes(i)){
            y.push(i)
        }
    }
    return y;
}

console.log(unique(x))

*/

//Find the second largest number in an array
//  (without sorting)
//let arr = [10, 50, 20, 50, 40, 30]; | o/p = 40

/*
let arr = [10, 50, 20, 50, 40, 30],f=-Infinity,s = -Infinity;

for(let i of arr){
    if (i>f){
        s = f
        f = i
    }else if(i>s && i !==f){
        s = i
    }
}
console.log(s)
*/

//3: Flatten a Deeply Nested Array
//let arr = [1, [2, [3, [4, [5]]]]]; | o/p : [1, 2, 3, 4, 5]

/*
function flatarr(n){
    let res = [];
    for(let i=0;i<n.length;i++){
        if(Array.isArray(n[i])){
            res = res.concat(flatarr(n[i]))
        }else{
            res.push(n[i]);
        }
    }
    return res;
}

console.log(flatarr([1, [2, [3, [4, [5]]]]]))
*/

//4: Count Frequency of Each Number in an Array
//let arr = [1, 2, 2, 3, 3, 3, 4, 4];
/*
let arr = [1, 2, 2, 3, 3, 3, 4, 4];
d = {}
for(let i of arr){
    d[i] = (d[1] || 0)+1;
}
console.log(d)
*/

//5: Rotate Array by K Steps (Right Rotation)
//Input: let arr = [1, 2, 3, 4, 5]; let k = 2;
//Expected Output : [4, 5, 1, 2, 3]
/*
let arr = [1, 2, 3, 4, 5],k = 2;
for(let i = 0;i<k;i++){
    let last = arr.pop();
    arr.unshift(last);
}
console.log(arr);
*/

//6: Find All Pairs That Sum to K
//Input : let arr = [1, 2, 3, 4, 5, 6]; | let k = 7; Expected Output : [ [1, 6], [2, 5], [3, 4] ]
/*
let arr = [1, 2, 3, 4, 5, 6], k = 7, o = [];
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < i; j++){
        if (arr[i] + arr[j] === k){
             o.push([arr[i], arr[j]]);
        }
    }
}
console.log(o);
*/

//7: Find Intersection of Two Arrays (Unique Values)
//Input : let a = [1, 2, 2, 3, 4]; let b = [2, 2, 3, 5]; | Expected Output:[2, 3]

/*
let a = [1, 2, 2, 3, 4]; let b = [2, 2, 3, 5],o=[];
for(let i=0;i<a.length;i++){
    if(b.includes(a[i]) && !o.includes(a[i])){
        o.push(a[i])
    }
}
console.log(o)
*/

