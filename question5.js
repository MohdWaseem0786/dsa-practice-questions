//
let arr=[1,200,3,4,5,6,100]

const fn=(a)=>{
    let maxvalue=arr[0]
    let value_index=0;
    for (let i = 0; i < arr.length; i++) {
        if (maxvalue<a[i]) {
            maxvalue=a[i]
            value_index=i   
        }
        
    }
    return value_index
}

console.log(fn(arr));