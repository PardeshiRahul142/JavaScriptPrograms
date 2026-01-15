let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//console.log("Length of array a :--->", a.length);          //   length()
// console.log("check element on  0 position" + a.at(0));    //   at()
// console.log("Add the string beteen all elelemts :" + a.join("  @  "));// join()

// a.push(1000,3000,5000);                           //in push method we can add multiple elements
// console.log("push element in array :" + a); //push()

//a.pop(1)  //this method remove last element of array
//console.log("pop the element from array :" + a);

// a.shift() //this method can remove first element and shift all element at left side. or decrese the array size
// console.log("Shift element " + a);
// console.log(a.length);

// a.unshift(1);    //this method can add element at starting position of array and increase size of array /
// console.log("Shift element " + a);
// console.log(a.length);

// let ans=Array.isArray(a)//this method can check is array or not if is array return false other wise false/
// console.log(ans);

delete a[0];
console.log(a);
