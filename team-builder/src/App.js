import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import TeamMemberList from './TeamMemberList';


function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      firstName: 'Sara',
      lastName: 'Carter'
    }]);
  
  const addTeamMember  = info => {
    const newTeamMember = {
      id: Date.now(),
      firstName: info.firstName,
      lastName: info.lastName
    };
    setTeamMembers([...teamMembers, newTeamMember])
  };
  
  const delMember = id => {
    const newArray = teamMembers.filter( info => {
      return info.id !== id ;
    })
    setTeamMembers(newArray);
  };

  return (
    <div className="App">
     <h1>Team Members</h1>
     <Form addTeamMemberFn= {addTeamMember} />
     <TeamMemberList MemberList = {teamMembers} delNoteFn= {delMember} />
    </div>
  );
}

export default App;
