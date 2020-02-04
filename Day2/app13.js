//reduce 

const arr =[1,2,3,4,5,-1];

const sum = arr.reduce((i,item)=>{
    return i+item;
},0);

console.log(sum);