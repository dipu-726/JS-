
let ans = 'dipu';
let type = typeof(ans);
console.log(type);


// to determine the type of the variable we use typeof() 

/*
    primitive data types :

    string 
    number 
    boolean 
    undefined 

    complex data types : 
    Object
    function

*/

function call(number)
{
    return number;
}
//const value =  call(4);
console.log(typeof(call));


/*
    Type coercion : 
        process of converting the value of one type into another.
        
        to convert a value to String : String(value_need_to_typeCasted)

        explicit code: 
            Writing an appropriate code to convert from one type into another : 
            eg : String(num)
            Number("12");
*/

let num=4;
console.log(typeof(num));

console.log(typeof(String(num)));

console.log(12/"6");
console.log(true+false);
console.log(15 + 3 + " -> number");

var abc = '2';

console.log("The value is : "+typeof(Number(abc)));
let e = 1+Number('123');
console.log(e);

let temp = 123;
let temp1 = "123";
console.log(temp==='123');
console.log(++temp1);
