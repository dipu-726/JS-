function getNumber(a,b,c)
{
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log('Hello ! ');
}

getNumber(10,22,23);

console.log(typeof getNumber);


/* 
    in javascript the fucntions are first class objects

    Every js function are the Function objects 

    argument is array like object, that contains the values of the arguments passed
    to that function 
*/

