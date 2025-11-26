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

