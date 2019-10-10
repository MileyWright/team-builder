import React, {useState} from 'react';

const Form = props => {
  const [teamMember, setTeamMember] = useState({ firstName: '', lastName: ''})
  
  const handleChange = event => {
    setTeamMember({...info, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addTeamMemberFn(info);
    setTeamMemeber({firstName:'', lastName:''})
  }
  return (
    <form onSubmit = {handleSubmit}>

    </form>
  );
};

export default Form;