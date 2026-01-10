//reduce method is use for perform operation on hole array and generate single output 

let arr=[10,2,1,2,4,5,4]

let newArr=arr.reduce(myFunction,0)

function myFunction(value,total)
{
   return total+value;
}
console.log("Sum of array elements :",newArr);