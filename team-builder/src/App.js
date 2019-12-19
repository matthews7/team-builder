import React, {useState} from 'react';

import './App.css';
import Card from './components/Card';
import Form from './components/Form'

function App() {
  const [teamMember, setTeamMember] = useState([{
    id: 1, 
    name: "TeamMember",
    email: "team@gmail.com",
    role: "Honey Butter Lover"
    }
  
  ]);


  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
  };


  return (
    <div className="App">
      <h1 className="header">Team List</h1>
      <Form  addTeamMember={addTeamMember}/>
      <Card teamMember={teamMember}/>
     
    </div>
  );
}

export default App;
