import React from 'react';
import Friend from './Friend'

class People extends React.Component {
    state = {

    }


    render() {
        return (
            <div>
                <div>
                    {this.props.people.map(person =>
                        <Friend
                            person={person}
                            key={person.id}
                            deletePerson={this.props.deletePerson}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default People;