import React, { useState } from 'react';
import './App.css';

function App() {

  const [userName,setUserName]= useState("Git handle Name");
  const [followers,setFollowers]= useState("");
  const [repos,setRepos]= useState("");
  const [avatar,setAvatar]= useState("");
  const [userInput,setUserInput]= useState("");
  const [userGitHandle,setUserGitHandle]= useState("");
  //let [number,setNumber]= useState(0);
  let  [dataForListing,setDataForListing] = useState("");

  let dl='';
  
  const setFeildsOnError = () => {
        setUserName("");
        setAvatar("");
        setRepos("");
        setFollowers("");
        setUserGitHandle("#");
  }

  
  //set the data to the states, based on the json received
  const setData = ({login,avatar_url,public_repos,followers,html_url}) => {
        setUserName(login);
        setAvatar(avatar_url);
        setRepos(public_repos);
        setFollowers(followers);
        setUserGitHandle(html_url);
        setDataForListing('');
  }

  const handleError = (response) => 
  {
      if(!response.ok)
      {
          setFeildsOnError();
      }
      else
        return response;
  }

  //Executes when users clicks search
  const handleSubmit= ()=> 
  {
      console.log('user input is : ', userInput);
      fetch(`https://api.github.com/users/${userInput}`)
      .then(handleError)
      .then(res => res.json())
      .then(data => 
      {
          console.log('this is data ',data);
          setData(data);
          // setDataForListing('');
      }).catch(error => {
        setFeildsOnError();
        alert('no user ! ');     
      });
  }
  
  const hitApiForListing = (dataFromUser)=>
  {
      setDataForListing('');
      console.log('this is -> ',dataForListing);

      console.log('searching for ',dataFromUser);
      fetch(`https://api.github.com/search/users?q=${dataFromUser}`)
      .then(handleErrorForListing) 
      .then(res => res.json())
      .then(data => {
        //console.log('from api hit : ',userInput);
        createList(data);
      }).catch(error =>
        {
            
        });
  }

  const handleErrorForListing = (response) => 
  {
      if(!response.ok)
      {
          console.log('Invalid Data for -> ',userInput);
      }
      else
        return response;
  }


  const createList = (data) => 
  {
        dl='';
        data.items.forEach(item => {
          if(!dl)
          {
              dl=item.login;
          }
          else
          {
              dl=dl+' '+item.login;
          }
        });
        setDataForListing(dl);
        console.log(dl);
  }


  const generateList = ()=>
  {
    dl = dataForListing;
    let countToBeShown = 10;
    let presentCountForListing =0;
    
    if(dl)
    {
      let arr =  dl.split(' ');
      return arr.map( (items) => {
            if(++presentCountForListing<countToBeShown)
            {
              return <li onClick={()=>{
                setUserInput(items);
                setDataForListing('');
                handleSubmit();
              }} className="list-in-input" >{items}</li>
            }
          }
        ); 
    }
  }
  

  return (
    <div className="App">
        <div className="nav-bar noselect" align="center">Git Hub Profile Finder</div>
        
        <div className="main-container">
        <div className="user-profile-search noselect" >
          
            <input className="user-profile-input" 
                type="text" 
                placeholder="Enter the profile name" 
                onChange={
                    (e) => 
                    {
                        setUserInput(e.target.value);   
                        if(userInput.length>=2)
                        {
                          setUserInput(e.target.value);
                          hitApiForListing(e.target.value);
                        }
                    }
                }
                autoComplete="off"
            /> 
          
            <input type="button" 
                onClick = 
                {
                  ()=> {
                    if(userInput)
                    {
                      handleSubmit();
                    }
                  }
                } 
                value="Search" 
            />

            <ul>{generateList()}</ul>
        </div>
        
        <div className="user-profile noselect">
           
            <div className="user-image noselect">
                <img className="user-profile-pic noselect" src={avatar} alt=''/>
            </div>


            <div className="user-name general-user noselect">
                {userName}
            </div>


            <div className="general-user noselect">
                Followers <b>{followers}</b>
            </div>


            <div className="general-user noselect">
                Repositories <b>{repos}</b>    
            </div>

            
            <div className="general-user noselect">
                    <a target='blank' className="link-for-profile" href={userGitHandle}>
                      <b>Link for GitHub Handle</b>
                    </a>
            </div> 
        </div>
        </div>
    </div>
  );
}

export default App;
