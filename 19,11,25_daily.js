//LCD
/*
let n1 = 12,n2 = 18,small=0,d=2,ok=false;
if(n1<n2){
    small = n1
}else{
    small = n2
}
while(d<=small){
    if(n1%d==0 && n2%d==0){
        console.log('LCD:',d);
        ok = true
        break
    }
    d++;
}
if(ok == false){
        console.log('No LCD');
    }
        */

//Armstrong Number
/*
let n = 153,bkp=n,bk=n,l=0,j=0;
while(n>0){
    n = Math.floor(n/10)
    l++;
}
while (bkp>0){
    d = bkp%10
    j = j+d**l
    bkp = Math.floor(bkp/10)
}
if(bk == j){
    console.log('Armstrong')
}else{
    console.log('Not Armstrong')
}*/

//merge two object in one object
/*
let a={a:1},b={b:2};
let u = {...a,...b}
console.log(u)
*/

//get names of object
//o/p = ['A','B']
/*
let X = [{name:'A'},{name:'B'}];
let r = X.map(v => v.name)
console.log(r)
*/
//max n object
/*
let x = {a: 10, b: 30, c: 20},max=0,key=0;
for(let i in x){
    if(x[i]>max){
        max = x[i]
        key = i
    }

}
console.log(key)
*/
 
