let id=0;
let count=0;
var array=[];
function insertIntoList()
{
    var contentFromUser = document.getElementById('inputFromUser').value;
    if(!contentFromUser)
    {
        alert('Enter the text ! ');
    }
    else
    { 
        let obj= {
            text: contentFromUser,
            id: id++
        };
        array.push(obj);
        console.log(array);
        createCard(obj);
    }
    document.getElementById('inputFromUser').value='';
}

function createCard(obj)
{
    count++;

    //to create and set the class the div 
    tempClassForDiv = 'class'+count;
    tempIdForCancelButton = 'cancel'+count;
    tempIdForEditButton='edit'+count;


    const div = document.createElement('div');
    div.className=tempClassForDiv;

    //creating a text area
    const textarea = document.createElement('TEXTAREA');
    textarea.readOnly=true; //making it readonly 


    //creating buttons 
    const cancelButton = document.createElement('button');
    const editButton = document.createElement('button');



    //populating the values of the btton 
    cancelButton.innerHTML='Cancel';
    editButton.innerHTML='Edit';

    //appending all the element into the respective elements
    div.append(textarea);
    div.append(cancelButton);
    div.append(editButton);
    document.getElementById('create-a-card').append(div);

    //populating the value with input from user 
    textarea.innerHTML=obj.text;


    cancelButton.addEventListener("click", function () {
        div.remove();
    });

    editButton.addEventListener('click',function(){
       
        if(editButton.innerText=='Edit')
        {
            textarea.readOnly=false;
            editButton.innerHTML='Save';
            
        }
        else if(editButton.innerText=='Save')
        {
            textarea.readOnly=true;
            editButton.innerHTML='Edit';
        }
    });

}
