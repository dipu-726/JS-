var clientData = {
    id: 1,
    fullName :'',
    setUserName: function(firstName, lastName){
        this.fullName = firstName+" "+lastName;
        return this.fullName;
    }
};

function getUserName(firstName,lastName,callback)
{
    return callback(firstName,lastName);
};

const res = getUserName('dipu','saha',clientData.setUserName);
console.log(res);