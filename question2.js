
//write a for loop to log the sum of all element

let arr=[1,2,3,4,5]


const fn=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}

console.log(fn(arr));





//result
// [15]