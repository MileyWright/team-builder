import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import TeamMemberList from './Components/TeamMemberList';


function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      firstName: 'Sara',
      lastName: 'Carter',
      email: 'saracarter@yahoo.com',
      github: 'SaraCarter'
       
    }]);
  
  const addTeamMember  = info => {
    const newTeamMember = {
      id: Date.now(),
      firstName: info.firstName,
      lastName: info.lastName,
      github: info.github,
      email: info.email
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
     <TeamMemberList MemberList = {teamMembers} delNameFn= {delMember} />
    </div>
  );
}

export default App;
