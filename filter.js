//filter  : when we want fetch specific type of data from Array we can use filter method

let arr=[10,20,12,4,32,12,1,11,33,4,5,4,6,7,5];

let newArray=arr.filter(myFunction);

function myFunction(value,index,arr)
{
    return value%2==0;
} 
console.log(newArray);