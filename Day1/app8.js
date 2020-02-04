function add(num1, num2)
{
    return num1+num2;
}

function mul(num1, num2)
{
    return num1*num2;
}

function calculator(num1 , num2, callback)
{
    if(typeof(callback)=='function'){
        return callback(num1,num2);
    }       
};

const result1 = calculator(1,2,add);
const result2 = calculator(7,2,mul);
console.log(result1);
console.log(result2);