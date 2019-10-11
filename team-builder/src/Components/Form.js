import React, {useState} from 'react';

const Form = props => {
  const [teamMember, setTeamMember] = useState({ firstName: '', lastName: ''})
  
  const handleChange = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addTeamMemberFn(teamMember);
    setTeamMember({firstName:'', lastName:''})
  }
  return (
    <form onSubmit = {handleSubmit}>
      <label htmlFor='firstName'>First Name: </label>
      <input
      id='firstName'
      value={teamMember.firstName}
      name='firstName'
      type='text'
      onChange={handleChange}
      /> 
      <label htmlFor='lastName'>Last Name: </label>
      <input
      id='lastName'
      value={teamMember.lastName}
      name='lastName'
      type='text'
      onChange={handleChange}
      /> 
      <button type='submit'>Add Team Member</button>
    </form>
  );
};

export default Form ;