//large of 3 numbers

/*
function islarge(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else{
        return c
    }
    
}
console.log(islarge(12,45,32))*/

//vowels count
/*
function isvowels(a){
    let cnt  = 0;
    for(let i of a){
        if('aeiouAEIOU'.includes(i)){
             cnt++
        }
    }
    return cnt
}
console.log(isvowels('abcdefg'))*/

let x = [1,2,3,4,5];
let i = x.map(v => v*2)
console.log(i)

let j = x.filter(c => c%2!=0)
console.log(j)


