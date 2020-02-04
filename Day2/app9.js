array=[1,3];
console.log(array);

/*
array.push([2,3,4]);
console.log(array);

[ 1, 3, [ 2, 3, 4 ] ]

*/


//in order to individually add elements into the array 

array.push.apply(array,[2,3,4]);

console.log(array);