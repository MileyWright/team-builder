import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import TeamMemberList from './TeamMemberList';


function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      firstName: 'Sara',
      lastName: 'Carter'
    }]);
  return (
    <div className="App">
     <h1>Team Members</h1>
     <Form />
     <TeamMemberList />
    </div>
  );
}

export default App;
