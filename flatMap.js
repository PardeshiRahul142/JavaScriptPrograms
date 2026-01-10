//flat map
let a=[[10,20,30],[40,50,60]];
let newArr=a.flat();

console.log(a.length);      //2
console.log(newArr.length)  //6

let third=newArr.flatMap(myFunction);

function myFunction(value,index,newArr)
{
     return value*2;
}
console.log(third);