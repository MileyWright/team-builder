import React from 'react';

const TeamMemberList = props => {
    console.log(props);
    return (
        <div className='team-list'>
            {props.MemberList.map(info => {
                return (
                    <div className='list' key={info.id}>
                        <h2>{info.firstName} {info.lastName}</h2>
                        <button onClick={() => props.delNameFn(info.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMemberList;