var mango ={
    name : 'dipu saha',
    callThisFunction: function(){
        console.log("Yeh !! Im called ! ");
    }
};

mango.callThisFunction.call();

mango.callThisFunction;


//creating objects with constructor 
console.log("-------------------------------------");
function createCircle(radius)
{
    this.radius = radius;
    this.draw = ()=>{

        console.log("2nd time I have been called ! "+radius);
    }
    this.changeRadius= (newRadius)=>
    {
        this.radius=newRadius;
        console.log(" new Radius has been assigned  ! "+this.radius);
    }
}

const c1 = new createCircle(1);
console.log(c1.radius);
c1.draw.call();
c1.changeRadius(34);
console.log(c1);

/*
const c2 = new createCircle(2);
console.log(c2['radius']);
c2.draw.call();


console.log(c2);
console.log("Calling this with a while loop ! ");

*/