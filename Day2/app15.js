const array1 = [5, 12, 8, 130, 44];

const res = array1.findIndex((item)=>{
        return item>13;
});

console.log(res);

console.log(array1.indexOf(12));
console.log(array1.indexOf(1));

console.log(array1.slice(0,2));
console.log(array1.slice(0,9));
