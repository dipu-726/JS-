function getSum(a,b)
{
    return a+b;
};

const res = getSum.apply(null,[1,2,3,4,5,6,7,8,9,10]);

console.log(res);