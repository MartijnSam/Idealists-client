import React, { useEffect, useState, useContext } from 'react';
import request from 'superagent';
import { baseUrl } from '../../../constants';
import { Redirect, Link } from 'react-router-dom';
import { Card } from 'material-ui'
import './IdeaDashboard.css'

export default function IdeaDashboard(props) {
  
  const [user, setUserData] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  
  // Currently userIdeas are ALL ideas, because it is a non-specific GET request
  const [userIdeas, setUserIdeas] = useState([]);
  
  useEffect(() => {
     if (props.authState.loggedIn)
      request
        .get(`${baseUrl}/current`)
        .set("Authorization", `Bearer ${props.authState.token}`)
        .then(res => setUserData(res.body));
    else props.history.replace('/MyIdea/login');
  }, []);
  
  // For testing purposes, this gets ALL ideas
  useEffect(() => {
    request
      .get(`${baseUrl}/ideas`)
      .set("Authorization", `Bearer ${props.authState.token}`)
      .then(res => setUserIdeas(res.body));
  }, []);
  
  const userLogout = () => {
    localStorage.removeItem('currentUserJwt');
    setUserLoggedIn(false);
  };

   const handleClick = () => {
     props.history.replace('/MyIdea/')
   }
  
  if (userLoggedIn === false)
    return (
      <Redirect to='/myIdea' />);
  
  
  //  Condition below should be userIdeas.length > 0, userData.firstName is purely for testing purposes
  // if (userData.firstName) {
    // console.log(userData)
    // console.log(userIdeas.idea[0].idea[3].answers[1])
    console.log(userIdeas)// console.log(sampleData);
    
    return (
      <div className='dashboard-container'>

        <br/>
        <br/>
        <br/>
        <div className='title'>
        <h1>{user.firstName}'s Dashboard</h1>
        </div>
        <div className='flex-tilescontainer'>
            {userIdeas.map(idea => 
            <Link className='tile-link' to={`/dashboard/ideas/${idea.id}`}><div className='idea-tile' key={idea.id}>
            <p>{idea.idea[3].answers[0].qAnswer}</p>
            
              </div></Link>
          )}
      </div>
        <div className='statusbar-container'>this will contain the statusbar</div>
        <div className='summary-container'>
          <p>Summary of your idea:</p><br/>
          
        </div>
        
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //     </div>
  //   );
    
  // }
}

// Code below is just sample data because the ideas database is empty
const sampleData =
  [
    {
      "createdAt": "2019-03-12T13:57:40.889Z",
      "id": 1,
      "idea": "{\"question1\":\"answer1\",\"question2\":\"answer2\",\"question3\":\"answer3\"}",
    },
    {
      "createdAt": "2019-03-12T13:57:54.639Z",
      "id": 2,
      "idea": "{\"question1\":\"answer1\",\"question2\":\"answer2\",\"question3\":\"answer3\"}",
    },
    {
      "createdAt": "2019-03-12T13:58:14.973Z",
      "id": 3,
      "idea": "{\"question1\":\"answer1\",\"question2\":\"answer2\",\"question3\":\"answer3\"}",
    },
  ]
