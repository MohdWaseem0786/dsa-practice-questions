// let arr=[1,2,3,4,5,6,7,8,9,10]
//write for loop to log each element multiply by 2
const arr=[1,2,3,6,4,5]
const array=[1,2,3,6,4,5,6]
let newarr=[]

const fn =(a)=>{
    for(let i=0;i<a.length;i++){
        console.log(a[i]*2);
    }
}
 
fn(array)
//result
// [2,4,6,8,10]