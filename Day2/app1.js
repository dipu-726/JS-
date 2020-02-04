//IIFE 

(callIfie = function(num=3){
    console.log('Inside IIFE! -> '+num+' '+arguments[0]);
})();
callIfie(3);



/*
(callIfie1 = (num)=>{
    console.log('Inside IIFE with arrow function ! '+arguments[0]);
})();
//callIfie1(4);

*/