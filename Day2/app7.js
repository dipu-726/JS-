//call in js

let person1 = {
    firstName : 'dipu',
    lastName  : 'saha',
};

//person1.printName.bind({firstName: 'AbC'});

let person2 = {
    firstName : 'Rohan',
    lastName : 'Singh'
};


function getFullName(obj)
{
    if(arguments.length!=0)
        return obj.firstName+" "+obj.lastName;
    else
    return this.firstName+' '+this.lastName;
}


const userName1 = getFullName.call(person1);
const userName2 = getFullName.call(person2);


const userName3 = getFullName(person1);

console.log(userName1);
console.log(userName2);
//console.log(userName3);