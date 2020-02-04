var x =13;
//Function Constructor creates the function with global scope  

function createFunction1()
{
    var x =10;
   function f(){
       return x;    //refers to local variable 
   }
   return f;
}

const res = createFunction1();
console.log(res());


function createFunction2()
{
    var x=4;
    return new Function('return x;');
}

let ans = createFunction2();
console.log(ans());