//Slice() this method can use for divide array is sub part . when we perform operation on array then it not change is old array create new array

let a=[10,20,30,40,50]
let newArr=a.slice(3);  //when we pass sigle index to slice method then this index conside as starting index and print after hole array;

let newArrTwo=a.slice(2,5);
console.log("Old array ",a);
console.log("newArray ",newArr)
console.log("use two parameter for slicing ",newArrTwo);


/*Old array  [ 10, 20, 30, 40, 50 ]
newArray  [ 40, 50 ]
use two parameter for slicing  [ 30, 40, 50 ]*/