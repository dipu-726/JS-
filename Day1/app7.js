allUserData=[];

var generalLastName = "Clinton";

function x(parameter1 , parameter2)
{
    console.log(parameter1+" and  "+parameter2);
}

function getInput (options, callback) 
{
    allUserData.push(options);
    callback (generalLastName, options);
}


getInput(1,x);
