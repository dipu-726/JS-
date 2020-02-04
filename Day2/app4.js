
(
    function(){
        a=10;
        console.log(a);
    }
)();

console.log(a);

let res = (function(parameterFromUser){
    a=20;       //data security
    console.log('Inside the IIFE  ->'+parameterFromUser);
    return a;
})('hello from user');


console.log("value of res  : "+res);


console.log(a);

