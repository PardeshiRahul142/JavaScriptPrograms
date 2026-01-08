//find() this method use for check elements in array on specific condition it method get function as parameter;

let a=[10,20,30,40,50,60];

let res=a.find(myFunction)

function myFunction(value,index,a)                      //output is 20; because this element is greate then 10;
{
   return value>10;
}
console.log(res);//this method can return only one value  