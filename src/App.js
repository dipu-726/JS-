import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  //creating hooks
 
  const [userName,setUserName]= useState("Git handle Name");
  const [followers,setFollowers]= useState("");
  const [repos,setRepos]= useState("");
  const [avatar,setAvatar]= useState("");
  const [userInput,setUserInput]= useState("example");
  const [userGitHandle,setUserGitHandle]= useState("");
  

  useEffect(() => {
  
    //fetch(`https://api.github.com/search/users?q=${name}`)
    
    //by default, loads example's details
    fetch(`https://api.github.com/users/example`)
      .then(handleErrors)
      .then(res => res.json())
      .then((data) => 
      {
          setData(data);
      });
},[]);
  
  //checks response for the request
   const handleErrors = (response)=>{ 
      if(!response.ok)
      {
        setUserName("");
        setAvatar("");
        setRepos("");
        setFollowers("");
      }
      else
        return response;
  }

  //set the data to the states, based on the json received
  const setData = ({login,avatar_url,public_repos,followers,html_url}) => {
        setUserName(login);
        setAvatar(avatar_url);
        setRepos(public_repos);
        setFollowers(followers);
        setUserGitHandle(html_url);
  }

  //Executes when users clicks search
  const handleSubmit= ()=> {
    console.log(userInput);
    fetch(`https://api.github.com/users/${userInput}`)
    .then(handleErrors)
        .catch()
        .then(res => res.json())
        .then(data => {
          console.log('this is data ',data);
          setData(data);
        }).catch(error => {
          alert('unable to find user !');
          setUserInput("example");
          console.log(userInput);
        });
  }


  return (
    <div className="App">
        <div className="nav-bar noselect" align="center">Git Hub Profile Finder</div>
        
        <div className="user-profile-search noselect" >
          
          
            <input className="user-profile-input" type="text" placeholder="Enter the profile name" 
            onChange={e => {setUserInput(e.target.value)}}
            autoComplete="off" /> 
            <input type="button" onClick={handleSubmit} value="Search" />
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
                    <a target='blank'className="link-for-profile" href={userGitHandle}>
                      <b>Link for GitHub Handle</b>
                    </a>
            </div>
            
        </div>

    </div>
  );
}

export default App;
