import React from 'react';

const People = props => {
    return (
        <div>
            <div>
                {props.people.map(person =>
                    <div key={person.id}>
                        Name: {person.name}
                        <br/>
                        Age: {person.age}
                        <br/>
                        email: {person.email}
                        <br/>
                        id: {person.id}
                        <br/>
                        <br/>
                        
                    </div>
                )}
            </div>
        </div>
    )
}

export default People;