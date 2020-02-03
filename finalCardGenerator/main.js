let id=0;
let count=0;
var array=[];
let create_card_from_String='';

function insertIntoList()
{
    var contentFromUser = document.getElementById('inputFromUser').value;
    if(!contentFromUser)
    {
        alert('Enter the text ! ');
    }
    else
    { 
        create_card_from_String='';
        let obj= {
            text: contentFromUser,
            id: id++,
            isEditable:false
        };
        array.push(obj);
        console.log(array);
        createCard(array);
    }
    document.getElementById('inputFromUser').value='';
}


function createCard(array)
{
    for(let i=0;i<array.length; i++)
    {
       createCardFromList(array[i]);
    }
    console.log("array", array);
    document.getElementById('create-a-card').innerHTML=create_card_from_String;
    //console.log('THis is done ! '+create_card_from_String);
}



function createCardFromList(obj)
{
    let text = obj.text;
    let id = obj.id;
    //let {id , text} = obj;
     return  create_card_from_String+=`
            <div class ="cardContainer"><div>${text}</div><button onClick='deleteFromList(${id})'>Cancel</button></div>
        `;
}


function deleteFromList(id)
{
    console.log("called dlete");
    console.log("delete id", id);
    array = array.filter(function(item) {
        return item.id!=id;
      });

      
      //console.log(newArray);
      create_card_from_String='';
      //create_card_from_String = "";
      document.getElementById('create-a-card').innerHTML = "";
      console.log("why this s")
      console.log("called");
      createCard(array);
}