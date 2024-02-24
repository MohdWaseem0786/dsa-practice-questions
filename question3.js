//write a for loop to find and log the largest element in the array

let arr=[10,2,30,4,50]

const fn=(a)=>{
    let max=0
    for(let i=0;i<a.length;i++){
       if (max<a[i]) {
        max=a[i]
       }
    }
    return max
}

console.log(fn(arr));