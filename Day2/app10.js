//bind creates a new function;

function getCoordinates(obj)
{
    //let coordinates = this.x+' , '+this.y;
   // console.log(coordinates);
    console.log(obj.name);
}

let c1 = {
    x:1,
    y:3
};

let c2 ={
    x:23,
    y:45
}

let obj={
    name : 'dipu'
}

getCoordinates.bind(c1);

const res= getCoordinates.bind(null,obj);
// bound functions : wraps the original function object.
res();